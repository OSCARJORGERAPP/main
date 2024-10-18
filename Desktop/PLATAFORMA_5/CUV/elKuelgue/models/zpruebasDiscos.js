const mongoose = require('mongoose')

const Discos = new mongoose.Schema({
    titulo: {type: String},
    fechaDeLanzamiento: {type: Date},
    precio: {type: Number},
    canciones: [
        {
            nombreDeCancion: {type: String},
            duracion : {type: String}
        }
    ]
})

module.exports = mongoose.model("Discos", Discos)
