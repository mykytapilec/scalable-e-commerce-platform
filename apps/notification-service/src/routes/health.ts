import type { FastifyPluginAsync } from 'fastify';

const healthRoute: FastifyPluginAsync = async (app) => {
  app.get('/health', async () => {
    return {
      status: 'ok',
      service: 'notification-service',
    };
  });
};

export default healthRoute;