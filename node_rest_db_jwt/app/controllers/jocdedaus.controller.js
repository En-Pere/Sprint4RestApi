const { jocdedaus } = require("../models");
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
    name: req.body.name ? req.body.name : "Anonim",
    game: req.body.game,
    dau1: req.body.dau1,
    dau2: req.body.dau2,
    success: req.body.success,
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
      if (data >= 1) {
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
  const player = {
    name: req.params.name,
    game: req.body.game,
    dau1: req.body.dau1,
    dau2: req.body.dau2,
    success: req.body.success,
    published: req.body.published ? req.body.published : false
  };
  Jocdedaus.create(player)
    .then(data => {
      res.send({
        message: `new game ${req.body.game} created for ${req.params.name}`});
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};

//elimina les tirades del jugador
exports.deleteGame = (req, res) => {
  const id = req.params.id;
  Jocdedaus.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num >= 1) {
        res.send({
          message: "Games were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete game ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });  
};
//retorna el llistat de jugades per un jugador.
exports.findPlayerGames = (req, res) => {
  const name = req.params.name;
  Jocdedaus.findAll({
    where: { name: name }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find games for player ${name}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving player ${name}`
      });
    });  
}

// Find all success
exports.findAllSuccess = (req, res) => {
  Jocdedaus.findAll({
    where: {
      success: {
        [Op.gte]: 1,
      }
    }
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });  
};

// Find loser
exports.loser = (req, res) => {
  Jocdedaus.findOne({
    order: [
      ["success", "ASC"],
    ],
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });  
};

// Find winner
exports.winner = (req, res) => {
  Jocdedaus.findOne({
    order: [
      ["success", "DESC"],
    ],
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });  
};
