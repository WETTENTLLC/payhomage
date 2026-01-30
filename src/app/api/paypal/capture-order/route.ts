import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

// PayPal environment setup
function environment() {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  
  if (process.env.PAYPAL_MODE === 'live') {
    return new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
  }
  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get order ID from request
    const body = await req.json();
    const { orderID, pledgeId } = body;

    if (!orderID) {
      return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
    }

    // Capture the PayPal order
    const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const response = await client().execute(request);
    const captureData = response.result;

    // Verify the capture was successful
    if (captureData.status !== 'COMPLETED') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Get payment details
    const capture = captureData.purchase_units[0].payments.captures[0];
    const amount = parseFloat(capture.amount.value);

    // Get user from session
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Create transaction record
    const transaction = await prisma.transaction.create({
      data: {
        userId: user.id,
        pledgeId: pledgeId || null,
        amount,
        paypalOrderId: orderID,
        paypalCaptureId: capture.id,
        status: 'COMPLETED',
      },
    });

    // If this is for a specific pledge, you could update the pledge status here
    if (pledgeId) {
      await prisma.pledge.update({
        where: { id: pledgeId },
        data: { status: 'ACTIVE' },
      });
    }

    return NextResponse.json({
      success: true,
      transactionId: transaction.id,
      amount,
      captureId: capture.id,
    });
  } catch (error) {
    console.error('PayPal capture order error:', error);
    return NextResponse.json(
      { error: 'Failed to capture PayPal order' },
      { status: 500 }
    );
  }
}
