import app from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { prisma } from './db/prisma.js';

const server = app.listen(env.PORT, () => {
  logger.info(`RangoliHomes API running on http://localhost:${env.PORT}`);
});

const handleShutdown = async (signal) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  server.close(async () => {
    await prisma.$disconnect();
    logger.info('Database connection closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));