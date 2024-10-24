const express = require('express');
const users = require('../models/users');
const bcrypt = require('bcrypt'); // Para manejar el hashing de contraseñas

const router = express.Router();

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

// Otras rutas...

module.exports = router;
