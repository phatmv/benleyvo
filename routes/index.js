var express = require('express');
var router = express.Router();

const UserModel = require("../models/user.model")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { layout: '../layouts/layout.hbs' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { layout: false });
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body; //const d = req.body.data

  console.log('username:', username)
  console.log('password:', password)

  const result = await UserModel.findOne({ username: username })

  console.log(result); 

  if (result?.password == password)
    res.redirect('/home')
  res.status(400).send('Login failed!') 

})
module.exports = router;
