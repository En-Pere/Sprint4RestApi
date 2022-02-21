const { jocdedaus } = require("../models");
const db = require("../models");
const Jocdedaus = db.jocdedaus;


//find all players
exports.findAll = (req, res) => {
  Jocdedaus.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving names."
      });
    });  
};

//create player
exports.create = (req, res) => {
  const player = {
    name: req.body.name,
    game: req.body.game,
    published: req.body.published ? req.body.published : false
  };
  //publish player in database
  Jocdedaus.create(player)
    .then(data => {
      res.send({
        message: "nuevo jugador creado: " + req.body.name});
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};

//edit player by name
exports.update = (req, res) => {
  const name = req.params.name;
  Jocdedaus.update(req.body, {
    where: { name: name }
  })
    .then(data => {
      if (data) {
        res.send({
          message: "Player updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update player with name: ${name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating player with name: ${name}.`
      });
    });  
};

//specific player makes a game
exports.updateGame = (req, res) => {
  
};


//-----> me quedo aquí
// //elimina tirades d'un jugador
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   const newGame = {
//     id: id,
//     game: req.body.game,
//   };
//   Jocdedaus.update(newGame)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while updating the game"
//       });
//     });  
// };

