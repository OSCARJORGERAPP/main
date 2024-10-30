const express = require('express');
const albums = require('../models/albums');
const router = express.Router();

// Crear nuevo álbum
router.post('/', async (req, res) => {
    try {
        await albums.create(req.body);
        res.status(201).send("Álbum creado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al crear el álbum");
    }
});

// Listar todos los álbumes
router.get('/', async (req, res) => {
    try {
        const result = await albums.find({});
        if (result.length) {
            res.status(200).send(result);
        } else {
            res.status(200).send('No hay álbumes');
        }
    } catch (error) {
        res.status(404).send("No data");
    }
});

// Obtener un álbum por ID
router.get('/:id', async (req, res) => {
    try {
        const album = await albums.findById(req.params.id);
        res.status(200).send(album);
    } catch (error) {
        res.status(404).send("No se encontró el álbum");
    }
});

// Actualizar un álbum específico
router.put('/:id', async (req, res) => {
    try {
        const { titulo, fechaDeLanzamiento, descripcion, portada } = req.body;
        await albums.findByIdAndUpdate(req.params.id, {
            titulo,
            fechaDeLanzamiento,
            descripcion,
            portada
        });
        res.status(200).send("Álbum actualizado correctamente");
    } catch (error) {
        res.status(500).send("Error al actualizar el álbum");
    }
});

// Añadir una canción a un álbum específico
router.post('/:id/canciones', async (req, res) => {
    try {
        const { nombreDeCancion, duracion, link } = req.body;
        const album = await albums.findById(req.params.id);
        
        album.canciones.push({ nombreDeCancion, duracion, link });
        await album.save();

        res.status(200).send("Canción añadida correctamente");
    } catch (error) {
        res.status(500).send("Error al añadir la canción");
    }
});

// Eliminar un álbum específico
router.delete('/:id', async (req, res) => {
    try {
        await albums.findByIdAndDelete(req.params.id);
        res.status(200).send("Elemento eliminado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en la eliminación");
    }
});



// Eliminar una canción de un álbum específico
router.delete('/:albumId/canciones/:cancionId', async (req, res) => {
    
    try {
        const { albumId, cancionId } = req.params;
        console.log(req.params)
        const album = await albums.findById(albumId);
        console.log(album)
        album.canciones=album.canciones.filter(cancion=>cancion.id!==cancionId)
        await album.save();
        res.status(200).send("Canción eliminada correctamente");
    } catch (error) {
        res.status(500).send("Error al eliminar la canción");
    }
});

module.exports = router;
