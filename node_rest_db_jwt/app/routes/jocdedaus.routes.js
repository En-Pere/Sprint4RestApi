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

  //elimina les tirades del jugador
  router.delete("/players/games/:id", jocdedaus.deleteGame)

  //retorna el llistat de jugades per un jugador.
  router.get("/players/games/:name", jocdedaus.findPlayerGames)

  //retorna tots els success
  router.get("/findallsuccess", jocdedaus.findAllSuccess)

  //retorna tots els success
  router.get("/loser", jocdedaus.loser)

  //retorna tots els success
  router.get("/winner", jocdedaus.winner)

  app.use('/api/jocdedaus', router);
};