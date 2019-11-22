require('dotenv').config();

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': (process.env.NODE_ENV === 'test') ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
  'ssl': !!process.env.SSL,
  'host': process.env.PROD_MIGRATION_DB_HOST,
  'port': process.env.PROD_MIGRATION_DB_PORT,
  'database': process.env.PROD_MIGRATION_DB_NAME,
  'username': process.env.PROD_MIGRATION_DB_USER,
  'password': process.env.PROD_MIGRATION_DB_PASS
};