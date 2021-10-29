
//paso 14
const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

//paso 15 creando instancia de mi clase Bands
const bands = new Bands();

bands.addBand( new Band('Queen') );
bands.addBand( new Band('BabyMetal') );
bands.addBand( new Band('Libido') );
bands.addBand( new Band('Guns N Roses') );

console.log(bands);


//paso 12 mensaje de sockets
io.on('connection', client => {
    console.log('CLIENTE CONECTADO');

    //Sera emitido las Bandas Musicales a todo cliente que se conecte
    client.emit('Bandas-Activas', bands.getBands() )

    client.on('disconnect', () => {
        console.log('CLIENTE DESCONECTADO')
    });

    client.on('emitMensaje',(payload)=>{
        console.log('MENSAJE: ', payload)
        // paylod recibe el objeto nombre: 'Andrei'

        io.emit( 'ioMensaje', { admin:'Nuevo Mensaje desde el servidor' } )
        //va a enviar un msj a todos los clientes conectados
        
        //on es para escuchar mensaje y emit para emitir un mensaje.
    });

    //*** VOTAR POR UNA BANDA
    client.on('vote-band', ( payload ) =>{
        
        //Recibiendo el ID en el paramentro del metodo
        bands.voteBanda( payload.id );

        //Emitiendo el cambio que recibio en la informacion y al usar io emitira a todos los clientes conectados
        io.emit('Bandas-Activas', bands.getBands() )

        //console.log( payload.id );
    });


    //***AGREGAR UNA NUEVA BANDA
    client.on('add-band', ( payload ) =>{
        const newBanda = new Band( payload.nname )
        bands.addBand(newBanda);
        io.emit('Bandas-Activas', bands.getBands() );
    });


    //***BORRAR UNA BANDA
    client.on('delete-band', ( payload ) =>{
        bands.deleteBand( payload.id );
        io.emit('Bandas-Activas', bands.getBands() );
    });

    

    // client.on('emitir-mensaje', ( payload )=> {
    //     //console.log(payload)
    //     // io.emit('nuevo-mensaje', payload) emite a todos los clientes!
    //     client.broadcast.emit('nuevo-mensaje', payload) //emite a todos menos al que lo emitio!

    // })

//el cliente es una PC que se acaba de conectar a mi SOCKET SERVER
});