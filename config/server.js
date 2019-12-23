var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//body-parser (middleware)
app.use(bodyparser.urlencoded({extended: true}));

// map all files in the routes folder as routes in the app.
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;