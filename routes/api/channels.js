var express = require('express');
var router = express.Router();
let Channel = require('../../models/channelModel');

/* GET all channels. */
router.get('/', async function(req, res, next) {
    let channel = await Channel.find().populate('users');

    return res.send(channel);

});


/* GET singel channels. */
router.get('/:channelid', async function(req, res, next) {

    let channel = await Channel.findById(req.params.channelid).populate('users');

    return res.send(channel);

});

/* Create a channel. */
router.post('/', async (req, res)=> {
    
    try{ let channel = new Channel();

        channel.name = req.body.name;
        channel.description = req.body.description;
        channel.users = [];
        channel.users.push(req.body.users);
    
        await channel.save();
        return res.send('channel created successfully');
    }
    catch{
        console.log('error');

    }
   

});





/* add user to channel. */
router.put('/adduser/:channelid', async (req, res)=> {
    
     let channel = await Channel.findById(req.params.channelid);

        channel.users.push(req.body.users);
    
        await channel.save();
        return res.send(channel);
   

});



/* GET members of the channel. */
router.get('/getmembers/:channelid', async function(req, res, next) {

    let channel = await Channel.findById(req.params.channelid).populate('users','username');

    console.log(channel.users);

    return res.send(channel.users);

});



/* GET messages of the channel. */
router.get('/getmessages/:channelid', async function(req, res, next) {

    let channel = await Channel.findById(req.params.channelid).populate('messages','text');

    return res.send(channel.messages);

});

module.exports = router;
