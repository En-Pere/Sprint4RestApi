const { User } = require("../config/dbconfig");
const bcrypt = require("bcryptjs");


//register
register = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const encryptedPass = req.body.password;
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: encryptedPass
  }
  User.create(user)
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


//find all users
findAllusers = (req, res) => {
  User.findAll()
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

login = (req, res) => {
  const mail = req.body.email;
  const user = req.body.username;
  //const pass = req.body.password
  
  User.findOne({
    where: {email: mail, username: user}
  })
  .then(data => {
    if(data){
      const checkPass = bcrypt.compareSync(req.body.password, data.password)
        if(checkPass) {
          res.json({message: "todo ok"});
        } else {
          res.json({message: "error password"});
        }
    } else {
      res.send({error: "error usuario o contraseña"})
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving names."
    });
  });  
}

// update = (req, res) => {
//   const name = req.params.name;
//   Joc.update(req.body, {
//     where: { name: name }
//   })
//     .then(data => {
//       if (data >= 1) {
//         res.send({
//           message: "Player updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update player with name: ${name}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: `Error updating player with name: ${name}.`
//       });
//     });  
// };

module.exports = {
  register,
  findAllusers,
  login
};

