const mongoose = require('mongoose')
const { validate } = require('./ejemplo')

const usuarios = new mongoose.Schema({
    nombre:{type:String, required: true},
    password:{
        type:String,
        validate:{
            validar: function(){
                if (length(password) < 6)
                return 'El password no es válido!'
            }
        },       
        required: true},

    email:{
        type:String,
        required: true,
        validate: {
        validator: function(v) {
          return regex.test(v);
        },
        message:'El mail no es válido!'
        }, 
        required: true},
    favoritos:{
        albums:{type:String},
        canciones:{type:String}
    },
})

module.exports = mongoose.model("usuarios", usuarios)

