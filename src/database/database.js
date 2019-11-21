const mysql = require('mysql');
const {database} = require('../keys');

const dbConnection = mysql.createConnection(database);

// TODO mirar que tal ha ido la conexión a base de datos y si hay un error, tratarlo
function checkDatabaseConection(err) {
    if (!err)
        console.log('Conectado a la base de datos correctamente');
    else {
        console.error('Database error:')
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST' :
                console.error('LA CONEXION DE BASE DE DATOS HA SIDO CERRADA');
                break;
            case 'ER_CON_COUNT_ERROR' :
                console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
                break;
            case 'ECONNREFUSED' :
                console.error('CONEXIÓN A LA BASE DE DATOS RECHAZADA');
                break;
            case 'ER_ACCESS_DENIED_ERROR' :
                console.error('USUARIO O CONTRASEÑA INCORRECTO');
                break;
            case 'ER_BAD_DB_ERROR' :
                console.error('BASE DE DATOS NO ENCONTRADA');
                break;
            default:
                console.error(err);
        }

    }
}

module.exports = dbConnection;