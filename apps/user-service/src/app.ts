import Fastify from 'fastify';
import logger from '@ecommerce/logger';
import { config } from '@ecommerce/config';
import healthRoute from './routes/health.js';

const app = Fastify({
  logger,
});

app.register(healthRoute);

app.log.info(
  {
    environment: config.nodeEnv,
    port: config.port,
  },
  'User Service initialized',
);

export default app;