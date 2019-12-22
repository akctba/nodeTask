module.exports = function(app) {
    app.get('/', function (req, res) {
        //res.send("<html><body>Central de noticias</body></html>");
        res.render("home/index");
    });
}