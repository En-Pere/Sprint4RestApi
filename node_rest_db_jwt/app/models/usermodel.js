module.exports = (sequelize, type) => {
  return sequelize.define('taulauser', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    username: {
      type: type.STRING,
    },
    email: {
      type: type.STRING
    },
    password: {
      type: type.STRING(150)
    },
  })
};