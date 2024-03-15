
const express = require( 'express' );
const cors = require( 'cors' );

class Server {
    
    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        
        // Middlwares
        this.middlwares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlwares() {

        // Cors
        this.app.use( cors() );

        // Directorio público
        this.app.use( express.static( 'public' ));
    }

    routes() {

        // Rutas de mi aplicación
        this.app.use( this.usersPath, require( '../routes/user.routes' ));
    }

    listen() {

        // Inicializar el servidor
        this.app.listen( this.port, () => {
            console.log( `Server is running on port ${ this.port }`);
        });
    }
}


module.exports = Server;