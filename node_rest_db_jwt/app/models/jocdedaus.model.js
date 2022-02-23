module.exports = (sequelize, Sequelize) => {
  const Jocdedaus = sequelize.define("jocdedaus", {
    name: {
      type: Sequelize.STRING,
  },
    game: {
      type: Sequelize.STRING
    },
    dau1: {
      type: Sequelize.INTEGER
    },
    dau2: {
      type: Sequelize.INTEGER
    },
    success_percentage: {
      type: Sequelize.INTEGER
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Jocdedaus;
};