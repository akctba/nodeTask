var mysql = require('mysql');

module.exports = function () {
        return mysql.createConnection({
            host: 'localhost',
            user: 'jornal',
            password: 'jornal123',
            database: 'portal_noticias'
        });
    }