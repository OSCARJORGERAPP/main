//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express')
const discos = require('../models/discos')

//instancia para manejar rutas
const router = express.Router()

// CREATE
// titulo, fechaDeLanzamiento, precio, canciones
router.post('/discos', async (req, res)=>{
    try {
      await discos.create(req.body)
      res.status(201).send("Disco agregado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el disco")
    }
})

module.exports = router
