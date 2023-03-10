require('dotenv').config();


module.exports = {
  port: process.env.PORT,
  name: process.env.NAME,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  dbName: process.env.DB_NAME,
  dialect: process.env.DIALECT,
};
