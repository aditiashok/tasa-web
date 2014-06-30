
// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// configuration
var db = require('./config/db');
var port = process.env.PORT || 8080;

app.configure(function() {
	app.use(express.static(__dirname + '/public')); // static files
	app.use(express.logger('dev')); // log reqs to console
	app.use(express.bodyParser()); // parse POST bodies
	app.use(express.methodOverride()); // simulate DELETE and PUT
});

// routes
var routes = require('./app/routes')(app);

// start
app.listen(port);
console.log('Began server on port ' + port);
exports = modules.exports = app;