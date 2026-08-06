import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV ?? 'development';

const port = Number(process.env.PORT ?? 3000);

const databaseUrl =
  process.env.DATABASE_URL ??
  'postgres://postgres:postgres@localhost:5434/ecommerce';

export const config = {
  nodeEnv,
  port,
  databaseUrl,
};