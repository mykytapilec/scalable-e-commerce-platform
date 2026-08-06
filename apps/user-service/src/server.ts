import app from "./app.js";
import { initializeDatabase } from "./database.js";

const port = Number(process.env.PORT ?? 3001);

async function start(): Promise<void> {
  await initializeDatabase();

  await app.listen({
    port,
    host: "0.0.0.0",
  });
}

start();