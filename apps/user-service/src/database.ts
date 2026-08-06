import { checkDatabaseConnection } from "@ecommerce/database";

export async function initializeDatabase(): Promise<void> {
  await checkDatabaseConnection();
}