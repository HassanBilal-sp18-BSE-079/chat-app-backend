
const Channel = require('../models/channelModel');
const mongoose = require('mongoose');


let addMessagetoChannel = async (req,res,next) =>{

    let id = new mongoose.Types.ObjectId();
    req.body._id = id;

    let channel = await Channel.findById(req.body.channel);

    channel.messages.push(req.body._id);

    await channel.save();

    next();


}


module.exports = addMessagetoChannel;