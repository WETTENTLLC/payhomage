import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Only initialize Prisma at runtime, not during build
function createPrismaClient() {
  // Don't create client during build
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return null as any;
  }
  
  return new PrismaClient();
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
