import app from './app.js';
import { initializeDatabase } from "./database.js";
import { config } from '@ecommerce/config';

const start = async () => {
  try {
    await initializeDatabase();
    await app.listen({
      port: config.port + 2,
      host: '0.0.0.0',
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();