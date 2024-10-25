const express = require('express')
const users = require('../models/users')
const bcrypt = require('bcrypt'); // Para manejar el hashing de contraseñas

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

// Ruta para crear usuarios
router.post('/', async (req, res) => {
  try {
      // Hashear la contraseña antes de guardar
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;

      await users.create(req.body);
      res.status(201).send("Usuario creado correctamente");
  } catch (error) {
      console.log(error);
      res.status(500).send("Error al crear el usuario");
  }
});

// Ruta para el login
router.post('/login', async (req, res) => {
  try {
      const user = await users.findOne({ nombre: req.body.nombre });
      if (user) {
          const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
          if (isPasswordValid) {
              res.status(200).send({ success: true, message: "Login exitoso" });
          } else {
              res.status(401).send({ success: false, message: "Contraseña incorrecta" });
          }
      } else {
          res.status(404).send({ success: false, message: "Usuario no encontrado" });
      }
  } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, message: "Error al iniciar sesión" });
  }
});



// GET - LISTAR TODOS LOS users - TC localhost:3000/users
router.get('/', async (req, res)=>{
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

//GET x TITULO - TC localhost:3000/nombre

router.get('/:nombre', async (req, res)=>{
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

//UPDATE - En el body solo lo que quiero cambiar - En TC localhost:3000/users/id
router.put('/:id', async (req, res)=>{
  try {
    const favoritos = req.body.favoritos
    const accion =req.body.accion
    const user = await users.findById(req.params.id)

    if (accion === 'agregar'){
      console.log(user)
      user.favoritos.push(favoritos)
      await user.save()
    }

    if (accion === 'eliminar'){
      console.log(user)
      user.favoritos.pop() //Ver variantes en lugar de pop
      await user.save()
    }


      res.status(200).send(user)
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})

//DELETE - En TC localhost:3000/users/users/id
router.delete('/:id', async (req, res)=>{
  try {
      await users.findByIdAndDelete(req.params.id, canciones)
      res.status(200).send("Elemento eliminado correctamente")
      } 

  catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})

module.exports = router