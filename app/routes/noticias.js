module.exports = function (app) {

    app.get('/news', function (req, res) {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'jornal',
            password: 'jornal123',
            database: 'portal_noticias'
        });

        let sql = 'select * from noticias';
        connection.query(sql, function (error, result) {
            res.send(result);
        });


        //res.render("noticias/noticias");
    });
}