# Pay Homage

A platform for creators to pledge a portion of their earnings to support the Bay Area creative community through Music, Film, and Tech funds.

## About

Pay Homage is a program of **Wett Entertainment LLC** that enables successful creators to give back to the community that shaped them. The platform emphasizes the Bay Area's rich cultural legacy—from the Oakland Sound to Silicon Valley innovation—and provides infrastructure for creators to support the next generation.

## Features

- **User Authentication**: Secure signup/login system with NextAuth.js
- **Pledge Creation**: Creators can pledge a percentage or fixed amount of their earnings
- **Fund Allocation**: Distribute pledges across Music, Film, and Tech categories
- **Dashboard**: Track contributions, active pledges, and impact
- **PayPal Integration**: Secure payment processing (setup required)
- **Grant Management**: Quarterly grant cycles for emerging creators

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Prisma ORM with SQLite (production-ready for PostgreSQL)
- **Authentication**: NextAuth.js with JWT sessions
- **Payments**: PayPal SDK
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WETTENTLLC/payhomage.git
cd payhomage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secure-secret-here"
NEXTAUTH_URL="http://localhost:3006"
PAYPAL_CLIENT_ID="your-paypal-client-id"
PAYPAL_CLIENT_SECRET="your-paypal-client-secret"
PAYPAL_MODE="sandbox"
PAYPAL_RECEIVER_EMAIL="wettentertainmentllc@gmail.com"
```

4. Generate a secure NextAuth secret:
```bash
openssl rand -base64 32
```

5. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
```

6. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3006](http://localhost:3006) to see the application.

## PayPal Integration

To complete the PayPal payment integration:

1. Create a PayPal developer account at [developer.paypal.com](https://developer.paypal.com)
2. Create a sandbox/live app to get your credentials
3. Add credentials to `.env.local`
4. Follow the implementation guide in `IMPLEMENTATION_GUIDE.md`

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/              # Bay Area legacy & mission
│   │   ├── api/                # API routes (auth, pledges)
│   │   ├── creator-fund/       # Grant information
│   │   ├── dashboard/          # User dashboard & pledge creation
│   │   ├── faq/                # Frequently asked questions
│   │   ├── how-it-works/       # Platform explanation
│   │   ├── login/              # Authentication
│   │   └── signup/             # User registration
│   ├── components/             # Reusable UI components
│   ├── lib/                    # Utilities (auth, prisma)
│   └── types/                  # TypeScript definitions
├── prisma/                     # Database schema & migrations
└── IMPLEMENTATION_GUIDE.md     # PayPal setup instructions
```

## Database Schema

- **User**: Authentication and profile data
- **Pledge**: Creator pledges with fund allocation
- **Transaction**: Payment records
- **Grant**: Grant applications and awards
- **Session/Account**: NextAuth.js tables

## Development Status

✅ Complete:
- All marketing pages
- Authentication system
- Pledge creation workflow
- User dashboard
- Database schema

🔧 In Progress:
- PayPal payment processing (credentials needed)

⏳ Planned:
- Admin panel for grant management
- Email notifications
- Production database migration
- Deployment to Vercel

## Bay Area Legacy

The platform celebrates the Bay Area's cultural contributions:
- **Music**: Hyphy, Oakland Sound, Summer of Love, Thrash Metal
- **Tech**: Silicon Valley, GUI/Mouse, Microchips, Google
- **Film**: George Lucas, Ryan Coogler, directors & actors
- **Community**: Black Panther Party, mentorship programs

## License

© 2026 Wett Entertainment LLC. All rights reserved.

## Contact

For questions or support, reach out to [wettentertainmentllc@gmail.com](mailto:wettentertainmentllc@gmail.com)

---

**Mission**: Rebuild Black Broadway in Oakland and support the next generation of Bay Area creators.

