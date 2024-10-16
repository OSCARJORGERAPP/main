const mongoose = require('mongoose')

const users = new mongoose.Schema({
    nombre:{type:String, required: true},
    password:{type:String, required: true},
    email:{type:String, required:true},
    favoritos:[
        {
            album:{type:String},
            cancion:{type:String},
        }],
})

module.exports = mongoose.model("users", users)

