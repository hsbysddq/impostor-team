const { Sequelize } = require('sequelize');

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: 'postgres',
  timezone: '+08:00',
  logging: false,
});

sequelize.authenticate().then(() => {
  console.log('connect on database');
});

module.exports = { sequelize };
