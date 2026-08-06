import app from './app.js';
import { config } from '@ecommerce/config';

const start = async () => {
  try {
    await app.listen({
      port: config.port + 6,
      host: '0.0.0.0',
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();