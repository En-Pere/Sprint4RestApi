const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./app/config/dbconfig")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//test server
app.get('/', (req, res,) => {
  res.send('Todo funcionando OK')
});

app.listen(8080, () => {
  console.log(`Server running on port 8080`)
});