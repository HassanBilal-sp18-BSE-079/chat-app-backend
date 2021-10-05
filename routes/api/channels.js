var express = require('express');
var router = express.Router();
let Channel = require('../../models/channelModel');

/* GET all channels. */
router.get('/', async function(req, res, next) {
    let channel = await Channel.find();

    return res.send(channel);

});


/* GET singel channels. */
router.get('/:channelid', async function(req, res, next) {

    let channel = await Channel.findById(req.params.channelid);

    return res.send(channel);

});

/* Create a channel. */
router.post('/', async (req, res)=> {
    
    try{ let channel = new Channel();

        channel.name = req.body.name;
        channel.description = req.body.description;
    
        await channel.save();
        return res.send('channel created successfully');
    }
    catch{
        console.log('error');

    }
   

});

module.exports = router;
