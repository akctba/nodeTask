var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// map all files in the routes folder as routes in the app.
consign().include('app/routes').into(app);

module.exports = app;