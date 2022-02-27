// const { User } = require("../config/dbconfig");
// const bcrypt = require("bcryptjs");


// //register
// register = (req, res) => {
//   req.body.password = bcrypt.hashSync(req.body.password, 10);
//   const user = User.create(req.body);
    
// };

// // create = (req, res) => {
// //   const player = {
// //     id: req.body.id,
// //     name: req.body.name ? req.body.name : "Anonim",
// //     game: req.body.game,
// //     dau1: req.body.dau1,
// //     dau2: req.body.dau2,
// //     success_percentage: req.body.success_percentage
// //   };
// //   //publish player in database
// //   Joc.create(player)
// //     .then(data => {
// //       res.send({
// //         message: "nuevo jugador creado: " + req.body.name});
// //     })
// //     .catch(err => {
// //       res.status(500).send({
// //         message:
// //         err.message || 'ha ocurrido un error'
// //       })
// //     })
// // };


// //find all users
// findAllusers = (req, res) => {
//   User.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving names."
//       });
//     });  
// };

// module.exports = {
//   register,
//   findAllusers
// }

// //register
// // findAll = (req, res) => {
// //   Joc.findAll()
// //     .then(data => {
// //       res.send(data);
// //     })
// //     .catch(err => {
// //       res.status(500).send({
// //         message:
// //           err.message || "Some error occurred while retrieving names."
// //       });
// //     });  
// // };
