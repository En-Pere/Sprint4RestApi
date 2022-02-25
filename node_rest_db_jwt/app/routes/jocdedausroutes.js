const router = require('express').Router();
const jocControllers = require("../controllers/jocdedauscontroller");


//find all players
router.get("/", jocControllers.findAll);

//post players
router.post("/players", jocControllers.create);

//edit player name
router.put("/players/:name", jocControllers.update)

//specific player makes a game
router.post("/players/games/:name", jocControllers.updateGame)

//elimina les tirades del jugador
router.delete("/players/games/:id", jocControllers.deleteGame)

//retorna el llistat de jugades per un jugador.
router.get("/players/games/:name", jocControllers.findPlayerGames)

//retorna percentatge mig d’èxits del conjunt de tots els jugadors
router.get("/ranking", jocControllers.ranking)

//retorna jugador amb pitjor % d'èxit
router.get("/loser", jocControllers.loser)

//retorna jugador amb millor % d'èxit
router.get("/winner", jocControllers.winner)


module.exports = router;

// module.exports = app => {
//   const jocdedaus = require("../controllers/jocdedaus.controller.js");
//   var router = require("express").Router();

//   //find all
//   router.get("/", jocdedaus.findAll);

//   //post players
//   router.post("/players", jocdedaus.create);

//   //edit player name
//   router.put("/players/:name", jocdedaus.update)

//   //specific player makes a game
//   router.post("/players/games/:name", jocdedaus.updateGame)

//   //elimina les tirades del jugador
//   router.delete("/players/games/:id", jocdedaus.deleteGame)

//   //retorna el llistat de jugades per un jugador.
//   router.get("/players/games/:name", jocdedaus.findPlayerGames)

//   //retorna percentatge mig d’èxits del conjunt de tots els jugadors
//   router.get("/ranking", jocdedaus.ranking)

//   //retorna jugador amb pitjor % d'èxit
//   router.get("/loser", jocdedaus.loser)

//   //retorna jugador amb millor % d'èxit
//   router.get("/winner", jocdedaus.winner)

//   app.use('/api/jocdedaus', router);
// };