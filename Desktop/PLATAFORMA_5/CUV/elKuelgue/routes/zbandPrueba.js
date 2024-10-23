const express = require('express');
const router = express.Router();
const albums = require('../models/albums');

// Ruta para obtener todos los álbumes
router.get('/', async (req, res) => {
    try {
        const result = await albums.find({});
        if (result.length) {
            res.status(200).send(result);
        } else {
            res.status(200).send('no hay albums');
        }
    } catch (error) {
        res.status(404).send("No data");
    }
});

// Ruta para eliminar un álbum específico
router.delete('/:id', async (req, res) => {
    try {
        await albums.findByIdAndDelete(req.params.id);
        res.status(200).send("Álbum borrado correctamente");
    } catch (error) {
        res.status(500).send("Error al borrar el álbum");
    }
});

// Ruta para actualizar un álbum específico
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

module.exports = router;
