const mongoose = require('mongoose')

const albums = new mongoose.Schema({
    titulo: {type: String, require:true, minlength: 2, unique:true},
    descripcion:{type:String,require:true, minlength: 2},
    fechaDeLanzamiento: {type: String, require:true, minlength: 4},
    portada: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: props => `${props.value} no es una URL válida!`
        }
    },

    canciones: [{
        nombreDeCancion: { type: String },
        duracion: { type: String },
        link:{type:String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
                },
                message: props => `${props.value} no es una URL válida!`
            }    
        }
        }]
    })


module.exports = mongoose.model("albums", albums)
