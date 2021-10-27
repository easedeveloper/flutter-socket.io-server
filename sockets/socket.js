
//paso 14
const {io} = require('../index') 

//paso 12 mensaje de sockets
io.on('connection', client => {
    console.log('CLIENTE CONECTADO')

    client.on('disconnect', () => {
        console.log('CLIENTE DESCONECTADO')
    });

    client.on('emitMensaje',(payload)=>{
        console.log('MENSAJE: ', payload)
        // paylod recibe el objeto nombre: 'Andrei'

        io.emit( 'ioMensaje', { admin:'Nuevo Mensaje desde el servidor' } )
        //va a enviar un msj a todos los clientes conectados
    });
    //on es para escuchar mensaje y emit para emitir un mensaje.

//el cliente es una PC que se acaba de conectar a mi SOCKET SERVER
});