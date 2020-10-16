const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "postgres",
  "penguasa@basisdata",
  "1E2A3D4a5c6a9412",
  {
    host: "basisdata.postgres.database.azure.com",
    dialect: "postgres",
    timezone: "+07:00",
  }
);
