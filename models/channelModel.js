const mongoose = require('mongoose');


let channelSchema = mongoose.Schema({
    name:String,
    description:String,
});


let Channel = mongoose.model('Channel', channelSchema);


module.exports = Channel;
