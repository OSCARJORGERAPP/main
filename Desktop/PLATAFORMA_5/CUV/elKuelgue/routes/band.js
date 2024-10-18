const express = require('express')
const albums = require('../models/albums')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//CREATE - En TC localhost:3000/albums/albums - En el Body los campos del modelo que quiero agregar
router.post('/albums', async (req, res)=>{
    try {
      await albums.create(req.body)
      res.status(201).send("Album creado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el album")
    }
})

// GET - LISTAR TODOS LOS ALBUMS - TC localhost:3000/albums/albums
router.get('/albums', async (req, res)=>{
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

//GET x TITULO - TC localhost:3000/albums/albums/titulo

router.get('/albums/:titulo', async (req, res)=>{
  try {
    const result = await albums.find({titulo: req.params.titulo})
    if (result.length){
      res.status(200).send(result)
    }
    else{
      res.status(200).send('no existe ese título')
    }
  } catch (error) {
    res.status(404).send("No data")
  }
})

//UPDATE - En el body solo lo que quiero cambiar - En TC localhost:3000/albums/albums/id
router.put('/albums/:id', async (req, res)=>{
  try {
    const album = await albums.findByIdAndUpdate(req.params.id, req.body,{new: true})
    res.status(200).send(album)
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})

//DELETE - En TC localhost:3000/albums//albums/id
router.delete('/albums/:id', async (req, res)=>{
  try {
      await albums.findByIdAndDelete(req.params.id, [0].canciones)
      res.status(200).send("Elemento eliminado correctamente")
      } 

  catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

module.exports = router