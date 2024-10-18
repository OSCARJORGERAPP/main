const express = require('express')
const users = require('../models/users')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//CREATE - En TC localhost:3000/users/users - En el Body los campos del modelo que quiero agregar
router.post('/users', async (req, res)=>{
    try {
      await users.create(req.body)
      res.status(201).send("Usuario creado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el usuario")
    }
})

// GET - LISTAR TODOS LOS users - TC localhost:3000/users/users
router.get('/users', async (req, res)=>{
  try {
    const result = await users.find({})
    if (result.length){
      res.status(200).send(result)
    }
    else{
      res.status(200).send('no hay users')
    }
  } catch (error) {
    console.log(error)
    res.status(404).send("No data")
  }
})

//GET x TITULO - TC localhost:3000/users/users/nombre

router.get('/users/:nombre', async (req, res)=>{
  try {
    const result = await users.find({nombre: req.params.nombre})
    if (result.length){
      res.status(200).send(result)
    }
    else{
      res.status(200).send('no existe ese nombre')
    }
  } catch (error) {
    console.log(error)
    res.status(404).send("No data")
  }
})

//UPDATE - En el body solo lo que quiero cambiar - En TC localhost:3000/users/users/id
router.put('/users/:id', async (req, res)=>{
  try {
    const user = await users.findByIdAndUpdate(req.params.id, req.body,{new: true})
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})

//DELETE - En TC localhost:3000/users/users/id
router.delete('/users/:id', async (req, res)=>{
  try {
      await users.findByIdAndDelete(req.params.id, [0].canciones)
      res.status(200).send("Elemento eliminado correctamente")
      } 

  catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

module.exports = router