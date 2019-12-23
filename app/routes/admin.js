module.exports = function(application) {
    application.get('/add_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;
        //res.send(noticias);

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.saveNoticias(noticia, function (error, result) {
            //res.render("noticias/noticias", {noticias: result});
            res.redirect('/news');
        });
    });
}