const mongoose = require('mongoose');


let channelSchema = mongoose.Schema({
    name:String,
    description:String,
    users: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Users' , required:true}],
    messages: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
});


let Channel = mongoose.model('Channel', channelSchema);


module.exports = Channel;
