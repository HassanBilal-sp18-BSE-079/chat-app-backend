
const mongoose = require('mongoose');


let messageSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    text:{
        type:String,
        required:true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' , required:true} ,
    channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' , required:true} ,
});


let Message = mongoose.model('Message', messageSchema);


module.exports =   Message;