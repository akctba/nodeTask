module.exports.form_add_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {
        invalid: {},
        newNoticia: {}
    });
}

module.exports.noticias_salvar = function (application, req, res) {
    var newNoticia = req.body;
    //res.send(noticias);

    //console.log(noticia);

    req.assert('titulo', 'Titulo e obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo e obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor e obrigatorio').notEmpty();
    req.assert('data_noticia', 'Data dos fatos e obrigatoria').notEmpty().isDate({
        format: 'YYYY-MM-DD'
    });
    req.assert('texto_noticia', 'Texto da noticia e obrigatorio').notEmpty();

    var error = req.validationErrors();
    if (error) {
        res.render("admin/form_add_noticia", {
            invalid: error,
            noticia: newNoticia
        });
        return;
    }


    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.saveNoticias(newNoticia, function (error, result) {
        //res.render("noticias/noticias", {noticias: result});
        res.redirect('/news');
    });
}