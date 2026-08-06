import app from "./app.js";
import { initializeDatabase } from "./database.js";

const port = 3003;

const start = async (): Promise<void> => {
  await initializeDatabase();

  try {
    await app.listen({
      port,
      host: "0.0.0.0",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();