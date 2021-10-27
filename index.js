//paso 1
const express = require('express');
//paso 4
const path = require('path');
//paso 9 establecera las variables de entorno
require('dotenv').config();
//paso 10 reenplazar el puerto 3000 por process.env.PORT

//paso 2 APP DE EXPRESS
const app = express();

//paso 11 crear un servidor de socket
const server = require('http').createServer(app);

//paso 13 exportando en io, ahora ir a socket.js
module.exports.io = require('socket.io')(server);

//paso 12 llamamos al archivo socket.js
require('./sockets/socket.js');





//paso 5 Definir nuestra carpeta(Path) publico
const publicPath = path.resolve( __dirname, 'public' )
//paso 6 crear carpeta public

//paso 7
app.use( express.static(publicPath) )
//paso 8 crear un archivo .env

//paso 3
server.listen( process.env.PORT, (err) =>{
    if (err)throw new Error(err);
     
    console.log('Servidor Corriendo en aero-puerto', process.env.PORT);
//Escuchando cualquier peticion en el puerto 3000
});