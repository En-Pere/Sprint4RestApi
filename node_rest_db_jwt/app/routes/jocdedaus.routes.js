module.exports = app => {

  const jocdedaus = require("../controllers/jocdedaus.controller.js");
  var router = require("express").Router();

  router.get("/", jocdedaus.findAll);
  // Retrieve all published Tutorials

  
  app.use('/api/jocdedaus', router);
};