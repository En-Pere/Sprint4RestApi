module.exports = (sequelize, Sequelize) => {
  const Jocdedaus = sequelize.define("jocdedaus", {
    name: {
      type: Sequelize.STRING
    },
    game: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Jocdedaus;
};