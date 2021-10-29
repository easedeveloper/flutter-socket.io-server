const { v4: uuidV4 } = require ('uuid');

class Band{

    constructor( name='no-name' ){
        this.id = uuidV4(); //identificado unico
        this.nname = name;
        this.vvotes= 0;
    }

}

module.exports = Band;