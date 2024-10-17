const mongoose = require('mongoose')

const albums = new mongoose.Schema({
    titulo: {type: String, require:true},
    descripcion:{type:String},
    fechaDeLanzamiento: {type: Date},
    portada:{type:String},
    canciones: [{
        nombreDeCancion: { type: String },
        duracion: { type: String }
        }]
    })


module.exports = mongoose.model("albums", albums)
