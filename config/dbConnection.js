var mysql = require('mysql');

//wraper to autoload doesn't create a connection
var connMySQL = function() {
    // console.log('New database connection has been established');
    return mysql.createConnection({
        host: 'localhost',
        user: 'jornal',
        password: 'jornal123',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    // console.log('dbConnection autoload executed');
    return connMySQL;
}