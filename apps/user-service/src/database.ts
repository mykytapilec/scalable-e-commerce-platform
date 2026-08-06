import { prisma } from "@ecommerce/database";

export async function initializeDatabase(): Promise<void> {
  await prisma.$connect();
}