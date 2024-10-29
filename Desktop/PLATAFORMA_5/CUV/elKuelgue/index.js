//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
console.log(process.env)
//LLAMAR A MONGOOSE
const mongoose = require('mongoose');

//LLAMAR RUTAS
const usersRouter=require('./routes/users.js')
const bandasRouter=require('./routes/band.js')

//LLAMAR A MODELS USERS Y ALBUMS
const users = require('./models/users.js');
const albums = require('./models/albums.js');

//NUESTRA URL MONGO DB
const url = process.env.URL
const port = process.env.PORT;
//GUARDAMOS EL MODULO EXPRESS EN UNA CONSTANTE
const app = express();
const path = require("path");

//MIDDLE WEAR PARCEA/ORGANIZA LOS DATOS PARA LEERLOS MEJOR
app.use(express.json());
app.use(cors())
//app.use("/health", (req, res) => res.sendStatus(200));
//SIRVE LOS ARCHIVOS DEL FRONT END
app.use(express.static(path.join(__dirname, "public")));

//ORGANIZADOR DE LAS RUTAS
app.use('/users', usersRouter);
app.use('/albums', bandasRouter);

//CONEXION CON NUESTRA URL MONGO DB
const connectToMongo = async()=>{
    try {
        await mongoose.connect(url)

        //FUNCION PARA LEVANTAR NUESTRO SERVIDOR
        app.listen(3000, ()=>{
        console.log("Server escuchando en puerto 3000 y DB conectada.");
        });

    } catch (error) {
        //SI FALLA CAE ACA
        console.log(error)     
    }   
}
 
connectToMongo()
