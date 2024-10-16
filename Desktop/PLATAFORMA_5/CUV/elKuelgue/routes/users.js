//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express')

//instancia para manejar rutas
const router = express.Router()

// CREATE users
// nombre,password, email, favoritos
router.post('/users', async (req, res)=>{
    try {
      await users.create(req.body)
      res.status(201).send("Usuario agregado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el usuario")
    }
})

module.exports = router