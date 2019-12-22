var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    var connection = dbConnection();

    app.get('/news', function (req, res) {

        let sql = 'select * from noticias';
        connection.query(sql, function (error, result) {
            //res.send(result);
            res.render("noticias/noticias", {noticias: result});
        });
        //res.render("noticias/noticias");
    });
}