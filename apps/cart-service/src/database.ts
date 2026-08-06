import { checkDatabaseConnection } from "@ecommerce/database";

export const initializeDatabase = async (): Promise<void> => {
  await checkDatabaseConnection();
};