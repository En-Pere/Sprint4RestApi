const Sequelize = require("sequelize");
const dbdata = require("./dbdata");
const jocdedausmodel = require("../models/jocdedausmodel")


const sequelize = new Sequelize(dbdata.DB, dbdata.USER, dbdata.PASSWORD, {
  host: dbdata.HOST,
  dialect: dbdata.dialect,
});

const Joc = jocdedausmodel(sequelize, Sequelize);

sequelize.sync({ force: false})
  .then(() => {
    console.log("Tablas sincronizadas")
  });

module.exports = {
  Joc
};

