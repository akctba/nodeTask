var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaAddNoticia = require('./app/routes/noticia_form_add')(app);

app.listen(3000, function () {
    console.log("Express server running");
});

