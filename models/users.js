const mongoose = require('mongoose')

const users = new mongoose.Schema({
    nombre:{type:String, required: true, minlength: 2},
    password:{type:String, required: true, minlength: 6},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    favoritos:[
        {
            album:{type:String},
            cancion:{type:String},
        }],
})

module.exports = mongoose.model("users", users)

