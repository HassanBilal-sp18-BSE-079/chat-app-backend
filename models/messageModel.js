
const mongoose = require('mongoose');


let messageSchema = mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' } ,
});


let Message = mongoose.model('Message', messageSchema);


module.exports =   Message;