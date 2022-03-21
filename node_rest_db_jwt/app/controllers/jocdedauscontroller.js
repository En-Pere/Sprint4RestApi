const { Joc } = require("../config/dbconfig");
const { Op } = require("sequelize");
//const { resultado, dau2 } = require("..//models/logicadaus")
const {sequelize} = require("../models/jocdedausmodel")



//find all players
findAll = (req, res) => {
  Joc.findAll()
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
create =  (req, res) => {
  const player = {
      name: req.body.name ? req.body.name : "Anonim",
    };
    //publish player in database
    Joc.create(player)
    .then(data => {
      res.send({
        message: "nuevo jugador creado"
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};



//edit player by name
update = (req, res) => {
  const name = req.params.name;
  Joc.update(req.body, {
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
updateGame = (req, res) => {

  const dauA = () => {
    const dau1 = Math.floor(6*Math.random()) + 1;
    return dau1;
  };
  const dau1 = dauA();

  const dauB = () => {
    const dau2 = Math.floor(6*Math.random()) + 1;
    return dau2;
  };
  const dau2 = dauB();
  
  const elJuego = () => {
    if (dau1 + dau2 == 7) {
      return "win"
    } else {
      return "loose"
    }
  };
  const winLose = elJuego();

  // const jugadas = () => {
  //   const name = req.params.name;
  //   Joc.update(req.body, {
  //   where: { game: name }
  //   })
  // }
  // const jugadasTotales = jugadas(); 
  
  const player = {
    //id: req.body.id,
    name: req.params.name,
    tiradas: {dau1, dau2, winLose},
    //game: {jugadasTotales},
    //success_percentage: {todoJugadas},
  };
  Joc.create(player)
    .then(data => {
      res.send({
        dau1: player.tiradas.dau1,
        dau2: player.tiradas.dau2,
        WinLose: player.tiradas.winLose,
        //Jugadas_totales: player.tiradas.jugadasTotales
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};

//elimina les tirades del jugador
deleteGame = (req, res) => {
  const name = req.params.name;
  Joc.destroy({
    where: { name: name }
  })
    .then(num => {
      if (num >= 1) {
        res.send({
          message: "Games were deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete game for ${name}.`
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
findPlayerGames = (req, res) => {
  const name = req.params.name;
  Joc.findAll({
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

//retorna percentatge mig d’èxits del conjunt de tots els jugadors
ranking = (req, res) => {
  Joc.findAll({
    where: {success_percentage: {[Op.gte]: 0}},
    attributes: ["success_percentage","name"],
    order: [
      ["success_percentage", "DESC"]
    ]
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
}

//retorna jugador amb pitjor % d'èxit
loser = (req, res) => {
  Joc.findOne({
    order: [
      ["success_percentage", "ASC"],
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

//retorna jugador amb millor % d'èxit
winner = (req, res) => {
  Joc.findOne({
    order: [
      ["success_percentage", "DESC"],
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


module.exports = {
  findAll,
  create,
  update,
  updateGame,
  deleteGame,
  findPlayerGames,
  ranking,
  loser,
  winner
}
