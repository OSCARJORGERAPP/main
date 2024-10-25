const express = require('express')
const albums = require('../models/albums')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//CREATE - En TC localhost:3000/albums/albums - En el Body los campos del modelo que quiero agregar
router.post('/', async (req, res)=>{
    try {
      await albums.create(req.body)
      res.status(201).send("Album creado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el album")
    }
})

// GET - LISTAR TODOS LOS ALBUMS - TC localhost:3000/albums/albums
router.get('/', async (req, res)=>{
  try {
    const result = await albums.find({})
    if (result.length){
      res.status(200).send(result)
    }
    else{
      res.status(200).send('no hay albums')
    }
  } catch (error) {
    res.status(404).send("No data")
  }
})

//GET x id - TC localhost:3000/albums/albums/id

router.get('/:id', async (req, res)=>{
  try {
    const album = await albums.findById(req.params.id);
    res.status(200).send(album);
    }catch (error) {
    res.status(404).send("No se encontró el album")
  }
})

/*UPDATE - En el body solo lo que quiero cambiar - En TC localhost:3000/albums/albums/id
router.put('/:id', async (req, res)=>{
  try {
    const canciones = req.body.canciones
    const accion =req.body.accion
    const album = await albums.findById(req.params.id)

    if (accion === 'agregar'){
      console.log(album)
      album.canciones.push(canciones)
      await album.save()
    }

    if (accion === 'eliminar'){
      console.log(album)
      album.canciones.pop() //Ver variantes en lugar de pop
      await album.save()
    }

    /*if (accion==='datos'){
      const album = await albums.findByIdAndUpdate(req.params.id, req.body,{new: true})
      }*/

   /* res.status(200).send(album)
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})*/

//DELETE - En TC localhost:3000/albums//albums/id
router.delete('/:id', async (req, res)=>{
  try {
      await albums.findByIdAndDelete(req.params.id)
      res.status(200).send("Elemento eliminado correctamente")
      } 

  catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

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


module.exports = router