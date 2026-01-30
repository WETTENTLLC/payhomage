# Pay Homage - Complete Implementation Guide

## ✅ COMPLETED FEATURES

### 1. Authentication System
- ✅ NextAuth.js configured with credentials provider
- ✅ Signup page (`/signup`)
- ✅ Login page (`/login`)
- ✅ Session management
- ✅ Password hashing with bcryptjs

### 2. Database Schema
- ✅ Prisma ORM configured with SQLite
- ✅ User model with authentication
- ✅ Pledge model with fund allocation
- ✅ Transaction model for payment tracking
- ✅ Grant model for applicant tracking

### 3. Core Pages
- ✅ Homepage with Bay Area legacy
- ✅ About page with comprehensive history
- ✅ How It Works page
- ✅ Creator Fund page
- ✅ FAQ page
- ✅ Dashboard page
- ✅ Create Pledge page

### 4. API Routes
- ✅ `/api/auth/signup` - User registration
- ✅ `/api/auth/[...nextauth]` - NextAuth handler
- ✅ `/api/pledges` - GET and POST pledges

## 🔧 REMAINING IMPLEMENTATION STEPS

### Step 1: Set Up PayPal Credentials

1. Go to https://developer.paypal.com
2. Create a PayPal Business account (sandbox for testing)
3. Get your Client ID and Secret
4. Update `.env.local`:
   ```
   PAYPAL_CLIENT_ID="your-actual-client-id"
   PAYPAL_CLIENT_SECRET="your-actual-secret"
   PAYPAL_MODE="sandbox"  # Change to "live" for production
   PAYPAL_RECEIVER_EMAIL="wettentertainmentllc@gmail.com"
   ```

### Step 2: Complete PayPal Integration

Create `/src/app/api/paypal/create-order/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const PAYPAL_API = process.env.PAYPAL_MODE === "live"
  ? "https://api-m.paypal.com"
  : "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { amount, pledgeId } = await request.json();
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount.toFixed(2),
            },
            payee: {
              email_address: process.env.PAYPAL_RECEIVER_EMAIL,
            },
            description: `Pay Homage Pledge - ID: ${pledgeId}`,
          },
        ],
        application_context: {
          return_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
          cancel_url: `${process.env.NEXTAUTH_URL}/dashboard?cancelled=true`,
        },
      }),
    });

    const order = await response.json();
    return NextResponse.json(order);
  } catch (error) {
    console.error("PayPal order creation error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

Create `/src/app/api/paypal/capture-order/route.ts`:

```typescript
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const PAYPAL_API = process.env.PAYPAL_MODE === "live"
  ? "https://api-m.paypal.com"
  : "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { orderID, pledgeId, amount, musicAmount, filmAmount, techAmount } = await request.json();
    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const captureData = await response.json();

    if (captureData.status === "COMPLETED") {
      // Record transaction in database
      await prisma.transaction.create({
        data: {
          pledgeId,
          amount,
          paypalOrderId: orderID,
          paypalCaptureId: captureData.id,
          status: "completed",
          musicAmount,
          filmAmount,
          techAmount,
        },
      });
    }

    return NextResponse.json(captureData);
  } catch (error) {
    console.error("PayPal capture error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
```

### Step 3: Add PayPal Button to Dashboard

Install PayPal React SDK:
```bash
npm install @paypal/react-paypal-js
```

Update `src/app/dashboard/create-pledge/page.tsx` to include PayPal button after pledge creation.

### Step 4: Set Up Production Database

For production, replace SQLite with PostgreSQL:

1. Set up a PostgreSQL database (Railway, Supabase, or Vercel Postgres)
2. Update `.env`:
   ```
   DATABASE_URL="postgresql://user:password@host:5432/dbname"
   ```
3. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
   }
   ```
4. Run:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

### Step 5: Email Notifications (Optional but Recommended)

Configure SMTP in `.env.local`:
```
EMAIL_SERVER="smtp://username:password@smtp.gmail.com:587"
EMAIL_FROM="noreply@payhomage.com"
```

Create email templates for:
- Welcome emails
- Pledge confirmations
- Payment receipts

### Step 6: Security Hardening

1. Generate secure NextAuth secret:
   ```bash
   openssl rand -base64 32
   ```
   Update `NEXTAUTH_SECRET` in `.env.local`

2. Set up CSRF protection (NextAuth handles this automatically)

3. Add rate limiting to API routes

4. Enable HTTPS in production

### Step 7: Testing Checklist

- [ ] Sign up new user
- [ ] Log in existing user
- [ ] Create a percentage pledge
- [ ] Create a fixed amount pledge
- [ ] Adjust fund allocation sliders
- [ ] Test PayPal sandbox payments
- [ ] Verify transactions appear in dashboard
- [ ] Test logout/login persistence

### Step 8: Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Step 9: Launch Checklist

- [ ] Switch PayPal to live mode
- [ ] Update `NEXTAUTH_URL` to production domain
- [ ] Set up production database
- [ ] Configure email service
- [ ] Test end-to-end payment flow
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Set up error monitoring (Sentry)
- [ ] Create backup strategy

## 📚 Additional Features to Consider

1. **Admin Panel**: Create `/admin` for managing grants
2. **Grant Application Form**: Add grant application submission
3. **Email Reports**: Monthly impact reports to pledgers
4. **Homage Badge**: Generate embeddable badges for pledgers
5. **Two-Factor Authentication**: Add extra security layer
6. **Recurring Payments**: Automate pledge payments via PayPal subscriptions

## 🔑 Environment Variables Reference

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret-change-this-in-production"
NEXTAUTH_URL="http://localhost:3006"

# PayPal
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_CLIENT_SECRET="your-paypal-client-secret"
PAYPAL_MODE="sandbox"
PAYPAL_RECEIVER_EMAIL="wettentertainmentllc@gmail.com"

# Email
EMAIL_SERVER="smtp://user:password@smtp.gmail.com:587"
EMAIL_FROM="noreply@payhomage.com"
```

## 📞 Support

All core features are implemented. The main remaining task is configuring PayPal credentials and testing the payment flow.

Server is ready to run on port 3006!
