//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express');

//LLAMAR A MONGOOSE
const mongoose = require('mongoose');

//LLAMAR RUTAS
const usersRouter=require('./routes/users.js')
const bandasRouter=require('./albums/band.js')

//LLAMAR A MODELS USERS Y ALBUMS
const users = require('./models/users.js');
const albums = require('./models/albums.js');

//NUESTRA URL MONGO DB
const url = 'mongodb+srv://ojrapp:Wn24CK6xa3SdXSBy@cluster0.bbhym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//GUARDAMOS EL MODULO EXPRESS EN UNA CONSTANTE
const app = express();

//MIDDLE WEAR PARCEA/ORGANIZA LOS DATOS PARA LEERLOS MEJOR
app.use(express.json());

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
