const db = require("../models");
const Jocdedaus = db.jocdedaus;
const Op = db.Sequelize.Op;

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
      res.send(data);
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
  const id = req.params.id;
  const name = req.params.name;
  Jocdedaus.update(req.body, {
    where: { id: id },
    name: {name: name}
  })
    .then(data => {
      res.send(`El nombre ${name} se ha modificado con éxito`)
    })
    .catch(err => {
      res.status(500).send
    })
}