const router = require('express').Router();
const { User } = require("../config/dbconfig");
//const userControllers = require("../controllers/usercontroller");
const bcrypt = require("bcryptjs");

router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const user = await User.create(req.body)
  res.json(user)
})

//router.get('/register', userControllers.findAllusers)





module.exports = router;
