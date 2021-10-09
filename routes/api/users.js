var express = require('express');
var router = express.Router();
const User = require('../../models/userModel');

/* GET users . */
router.get('/', async function(req, res, next) {
  let users = await User.find();
  res.send(users);
});

/* GET singel users. */
router.get('/:userid',async function(req, res, next) {
let user = await User.findById(req.params.userid);
  res.send(user);
});


/* POST singel users. */
router.post('/',async function(req, res, next) {
  let user = new User();
  user.username  = req.body.username;
  await user.save();
    res.send(user);
  });

/* Update singel users. */
router.put('/:userid',async function(req, res, next) {
  let user = await User.findById(req.params.userid);
  user.username  = req.body.username;
  await user.save();
    res.send(user);
  });

  /* delete singel users. */
router.delete('/:userid',async function(req, res, next) {
  let user = await User.findByIdAndDelete(req.params.userid);
    res.send('user deleted successfully');
  });

module.exports = router;
