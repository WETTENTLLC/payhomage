import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const pledges = await prisma.pledge.findMany({
      where: {
        user: {
          email: session.user.email!
        }
      },
      include: {
        transactions: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ pledges });
  } catch (error) {
    console.error("PLEDGES_GET_ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const {
      pledgeType,
      percentageAmount,
      fixedAmount,
      frequency,
      musicFund,
      filmFund,
      techFund,
    } = body;

    // Validate fund allocation
    if (musicFund + filmFund + techFund !== 100) {
      return new NextResponse("Fund allocation must total 100%", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const pledge = await prisma.pledge.create({
      data: {
        userId: user.id,
        pledgeType,
        percentageAmount: pledgeType === 'percentage' ? percentageAmount : null,
        fixedAmount: pledgeType === 'fixed' ? fixedAmount : null,
        frequency,
        musicFund,
        filmFund,
        techFund,
        status: 'active',
      },
    });

    return NextResponse.json({ pledge });
  } catch (error) {
    console.error("PLEDGE_CREATE_ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
