import { prisma } from "@ecommerce/database";

export const database = async (): Promise<boolean> => {
  await prisma.$connect();

  return true;
};