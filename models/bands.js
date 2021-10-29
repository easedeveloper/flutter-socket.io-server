


class Bands{

    constructor(){
        this.bands = [];
    }

//Anadir una nueva Banda
addBand( band = new Band() ){

    //Añadiendo una nueva banda a mi arrelgo bands
    this.bands.push( band );
}

//OBTENER LAS BANDAS
getBands(){
    return this.bands;
}

deleteBand( id = '' ){

    //Si regresa un true lo va a filtrar
    this.bands = this.bands.filter( banda => banda.id !== id );
    
    //Regresando el nuevo arreglo de bandas
    return this.bands;
}

//Incrementando una nueva Banda
voteBanda( id= ''){

    this.bands = this.bands.map( banda => {

        if( banda.id === id ){
           banda.vvotes++;
           return banda;
        }else{
            return banda;
        }

    });
}
}

 module.exports = Bands;