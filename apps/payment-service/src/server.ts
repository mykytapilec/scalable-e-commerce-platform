import app from "./app.js";
import { database } from "./database.js";

const startServer = async (): Promise<void> => {
  await database();

  try {
    await app.listen({
      port: 3005,
      host: "0.0.0.0",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();