module.exports = function (application) {
    application.get('/', function (req, res) {
        //res.send("<html><body>Central de noticias</body></html>");
        //res.render("home/index");
        application.app.controllers.home.index(application, req, res);
    });
}