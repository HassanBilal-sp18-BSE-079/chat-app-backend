var express = require('express');
var router = express.Router();
const Message = require('../../models/messageModel');
const Channel = require('../../models/channelModel');
const addMessagetoChannel = require('../../middleware/addMessagetoChannel');

/* GET messages listing. */
router.get('/', async function(req, res, next) {
  let messages = await Message.find().populate('user');
  res.send(messages);
});


/* GET singel message. */
router.get('/:messageid', async function(req, res, next) {
  let message = await Message.findById(req.params.messageid).populate('user');
  res.send(message);
});


/* POST singel message. */
router.post('/', addMessagetoChannel,async function(req, res, next) {

  let message = new Message();
  message.text = req.body.text;
  message.user = req.body.user;
  message.channel = req.body.channel;
  message._id = req.body._id;
  await message.save();

  res.send(message);
});



/* update singel message. */
router.put('/:messageid', async function(req, res, next) {
  let message = await Message.findById(req.params.messageid);
  if (message.user === req.body.user){
    message.text = req.body.text;
    await message.save();
    res.send('message updated successfully');
  }
  else{
    res.status(401).send('given user id does not match to the previous user id');
  }
  
});



/* delete singel message. */
router.delete('/:messageid', async function(req, res, next) {
  let message = await Message.findById(req.params.messageid);
  if (message.user === req.body.user){
    let message1 = await Message.findByIdAndDelete(req.params.messageid);
    res.send('message deleted successfully');
  }
  else{
    res.status(401).send('given user id does not match to the previous user id');
  }
  
});

module.exports = router;