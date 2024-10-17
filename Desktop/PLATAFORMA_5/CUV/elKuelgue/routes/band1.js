const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const Album = mongoose.model('albums', albums);

app.put('/albums/:albumId/canciones/:cancionId', async (req, res) => {
    try {
        const { albumId, cancionId } = req.params;
        const { nombreDeCancion, duracion } = req.body;

        const album = await Album.findById(albumId);
        if (!album) {
            return res.status(404).send('Álbum no encontrado');
        }

        const cancion = album.canciones.id(cancionId);
        if (!cancion) {
            return res.status(404).send('Canción no encontrada');
        }

        cancion.nombreDeCancion = nombreDeCancion || cancion.nombreDeCancion;
        cancion.duracion = duracion || cancion.duracion;

        await album.save();
        res.send(album);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});