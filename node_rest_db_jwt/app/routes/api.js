const router = require("express").Router();

const jocdedausroutes = require("./jocdedausroutes")

router.use('/jocdedaus', jocdedausroutes); 



module.exports = router;