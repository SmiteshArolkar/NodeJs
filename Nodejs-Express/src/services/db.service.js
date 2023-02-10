const Sequelize = require("sequelize");

const config = require("../config/config");

const sequelize = new Sequelize(config.dbName, config.name, config.password, {
  host: config.host,
  dialect: config.dialect,
});
