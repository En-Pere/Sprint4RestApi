module.exports = app => {
  const jocdedaus = require("../controllers/jocdedaus.controller.js");
  var router = require("express").Router();

  //find all
  router.get("/", jocdedaus.findAll);

  //post players
  router.post("/post/players", jocdedaus.create);

  //edit player name
  router.put("/put/players/:name", jocdedaus.update)

  //elimina tirades d'un jugador
  router.put("/players/:id/games", jocdedaus.findOne)


  app.use('/api/jocdedaus', router);
};