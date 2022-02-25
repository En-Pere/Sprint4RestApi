const router = require("express").Router();

const jocdedausroutes = require("./jocdedausroutes")
const userroutes = require("./userroutes")

router.use('/jocdedaus', jocdedausroutes); 
router.use('/users', userroutes); 


module.exports = router;