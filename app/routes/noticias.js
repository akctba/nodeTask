module.exports = function (application) {

    application.get('/news', function (req, res) {
        application.app.controllers.noticias.noticias(application, req, res);
    });

    application.get('/noticia', function (req, res) {
        application.app.controllers.noticias.noticia(application, req, res);
    });
}