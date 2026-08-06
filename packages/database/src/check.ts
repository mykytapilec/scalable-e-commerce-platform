import { checkDatabaseConnection } from './index.js';

const main = async () => {
  const connected = await checkDatabaseConnection();

  console.log(
    connected
      ? 'Database connection successful'
      : 'Database connection failed',
  );

  process.exit(connected ? 0 : 1);
};

main();