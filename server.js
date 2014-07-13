// modules
var root = __dirname,
		express = require('express'),
		mongoose = require('mongoose'),
		path = require('path'),
		db = require('./config/db');

var app = express();
var port = process.env.PORT || 3000;

// start
app.listen(port);
mongoose.connect(db.url);
console.log('* TASA-web serving on port ' + port + ' *');

// expose
exports = module.exports = app;
