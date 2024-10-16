const express = require('express')
const albums = require('../models/albums')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//CREATE

router.post('/albums', async (req, res)=>{
    try {
      await albums.create(req.body)
      res.status(201).send("Album creado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el album")
    }
})

// GET ALL ---> TRAER TODOS LOS albums
router.get('/albums', async (req, res)=>{
  try {
    const result = await albums.find({})

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//GET x NOMBRE

router.get('/albums/:titulo', async (req, res)=>{
  try {
    const result = await albums.find({titulo: req.params.titulo})
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//UPDATE

router.put('/albums/:id', async (req, res)=>{
  try {
      /*const id = req.params.id
      const newInfo = req.body

      console.log("NEW INFO", newInfo)

      const arr = [ { nombreDeCancion: 'Cancion 1 del album', duracion: 4 } ]*/

      await albums.findByIdAndUpdate(req.params.id, req.body,)
      res.status(200).send(albums)
    /*res.status(200).send("Elemento actualizado correctamente")*/
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})

//DELETE
router.delete('/albums/:id', async (req, res)=>{
  try {
      const id = req.params.id
      await albums.findByIdAndDelete(id)

    res.status(200).send("Elemento eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

module.exports = router