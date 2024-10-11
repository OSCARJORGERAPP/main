/*Definí tu modelo para album. Este deberá tener los campos :
Título
Descripción
Año en qué salió a la venta
Canciones, cada una de las cuales a su vez tendrá título y duración.
Portada: será una URL , correspondiente a la imagen de la portada del album.*/

const mongoose = require('mongoose')
const albums = new mongoose.Schema({
titulo:{type: String, required: true},
descripcion:{type: text, required: true},
año:{type:Date, required: true},
portada:{type: URL, required: true},
canciones:[{
    titulo:{type: text, required: true},
    duracion:{type: Number, required: true},
    portada:{type: URL, required: true}
}]
})

module.exports = mongoose.model("albums", albums)