//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express')

//instancia para manejar rutas
const router = express.Router()

//RUTAS
router.get("/", (req, res)=>{
    res.status(200).send('Hola')
})

router.get("/users", (req, res)=>{
    res.status(200).send('Hasta luego')
})

router.get("/products", (req, res)=>{
    res.status(200).send('Hasta luego')
})

module.exports = router


