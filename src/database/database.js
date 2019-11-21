const mysql = require('mysql');
const {database} = require('../keys');

const dbConnection = mysql.createConnection(database);

dbConnection.connect((err, connection) => {
    checkDatabaseConection(err)
});

// TODO mirar que tal ha ido la conexión a base de datos y si hay un error, tratarlo
function checkDatabaseConection(err) {
    if (!err)
        console.log('Database connected'.yellow);
    else {
        console.error('Database error:'.red)
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST' :
                console.error('THE DATABASE CONNECTION HAS BEEN CLOSED'.red);
                break;
            case 'ER_CON_COUNT_ERROR' :
                console.error('THE DATABASE HAS MANY CONNECTIONS'.red);
                break;
            case 'ECONNREFUSED' :
                console.error('CONNECTION REJECTED'.red);
                break;
            case 'ER_ACCESS_DENIED_ERROR' :
                console.error('INCORRECT USER OR PASSWORD'.red);
                break;
            case 'ER_BAD_DB_ERROR' :
                console.error('DATABASE NOT FOUND'.red);
                break;
            default:
                console.error(err);
        }

    }
}

module.exports = dbConnection;