const express = require('express')
const discos = require('../models/discos.js')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//CRUD

//C ---> Crear POST
//R ---> Leer  GET
//U ---> Actualizar PUT
//D ---> Borrar DELETE

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

// GET ALL ---> TRAER TODOS LOS DISCOS
router.get('/discos', async (req, res)=>{
  try {
    const result = await discos.find({})

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//GET x NOMBRE

router.get('/discos/:titulo', async (req, res)=>{
  try {
    const result = await discos.find({titulo: req.params.titulo})
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//UPDATE

router.put('/discos/:id', async (req, res)=>{
  try {
      const id = req.params.id
      const newInfo = req.body

      console.log("NEW INFO", newInfo)

      const arr = [ { nombreDeCancion: 'Cancion 1 del album', duracion: 4 } ]

      await discos.findByIdAndUpdate(id, {canciones: arr}, {new: true})

    res.status(200).send("Elemento actualizado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})


router.delete('/discos/:id', async (req, res)=>{
  try {
      const id = req.params.id
      await discos.findByIdAndDelete(id)

    res.status(200).send("Elemento eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

//create - C
//find con o sin parametros para filtrar - R
//findByIdAndUpdate - U
//findByIdAndDelete - D


 module.exports = router

//RUTAS 
// router.get("/", (req, res)=>{
//     console.log("BODY-->",req.body)
//     console.log("PARAMS-->", req.params)

//     const banda = req.body.banda
//     const cancion = req.body.cancion

//     // res.status(200).send("La cancion "+ cancion + " De la banda "+ banda + "Fue agregada correctamente a la DB")
//     res.status(200).send("RUTA EJECUTADA CORRECTAMENTE")

//   })

// router.get("/users", (req, res)=>{
//     res.status(200).send(usuarios)
// })


// router.get("/users/:uid", (req, res)=>{
//     console.log(req.params)
//     const uid = req.params.uid

//     const usuarioFiltrado = usuarios.filter((usuario)=>usuario.uid === uid)

//     res.status(200).send(usuarioFiltrado)
// })

// router.get("/products", (req, res)=>{
//     res.status(200).send("Hasta luego!")
// })