import { PrismaClient, Prisma } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Handle Netlify's PRISMA_CLIENT_OPTIONS env var (which may be an empty string)
const rawOptions = process.env.PRISMA_CLIENT_OPTIONS;
const prismaOptions: Prisma.PrismaClientOptions | undefined =
  rawOptions && rawOptions.trim().length > 0
    ? (JSON.parse(rawOptions) as Prisma.PrismaClientOptions)
    : undefined;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(prismaOptions);

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
