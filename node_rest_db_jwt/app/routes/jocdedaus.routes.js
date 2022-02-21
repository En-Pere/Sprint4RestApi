module.exports = app => {
  const jocdedaus = require("../controllers/jocdedaus.controller.js");
  var router = require("express").Router();

  //find all
  router.get("/", jocdedaus.findAll);

  //post players
  router.post("/players", jocdedaus.create);

  //edit player name
  router.put("/players/:name", jocdedaus.update)

  //specific player makes a game
  router.post("/players/games/:name", jocdedaus.updateGame)

  //elimina tirades d'un jugador
  // router.put("/players/:id/games", jocdedaus.findOne)


  app.use('/api/jocdedaus', router);
};