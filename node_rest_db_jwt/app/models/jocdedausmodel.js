module.exports = (sequelize, type) => {
  return sequelize.define('taulajoc', {
    // id: {
    //   type: type.INTEGER,
    //   primaryKey: true,
    //   autoincrement: true,
    // },
    name: {
      type: type.STRING,
      unque: true,
      allowNull: false
    },
    tiradas: {
      type: type.JSON,
      defaultValue: 0
    },
    game: {
      type: type.INTEGER,
      defaultValue: 0
    },
    // dau2: {
    //   type: type.JSON,
    //   defaultValue: 0
    // },
    success_percentage: {
      type: type.INTEGER,
      defaultValue: 0
    },
  })
};
