import { checkDatabaseConnection } from "@ecommerce/database";

export const database = async (): Promise<boolean> => {
  return checkDatabaseConnection();
};