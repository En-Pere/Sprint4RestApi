const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

require("./app/routes/jocdedaus.routes")(app);

//do not drop table
db.sequelize.sync();

// drop table if already exists
// db.sequelize.sync({ force: true })
//   .then(() => {
//     console.log("Drop and re-sync db.");
//   });


// simple route
app.get('/', (req, res,) => {
  res.json({msg: 'Aplicació Joc de Daus'})
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
});