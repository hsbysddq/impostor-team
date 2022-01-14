require('dotenv').config();

const { DB_NAME, DB_PORT, DB_USER, DB_PASS, DB_HOST } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: parseInt(DB_PORT, 10),
    host: DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
