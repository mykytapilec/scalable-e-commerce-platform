import { prisma } from "@ecommerce/database";

export const initializeDatabase = async (): Promise<void> => {
  await prisma.$connect();
};