import { Pool } from 'pg';

const databaseUrl =
  process.env.DATABASE_URL ??
  'postgres://postgres:postgres@localhost:5434/ecommerce';

export const db = new Pool({
  connectionString: databaseUrl,
});

export const checkDatabaseConnection = async () => {
  const client = await db.connect();

  try {
    await client.query('SELECT 1');

    return true;
  } finally {
    client.release();
  }
};