const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    username:String,
});


let Users = mongoose.model('Users', userSchema);


module.exports =  Users;