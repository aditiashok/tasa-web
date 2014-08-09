// modules
var root = __dirname,
	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	path = require('path'),
	favicon = require('serve-favicon');
	db = require('./config/db');

var app = express();
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use("/", express.static(path.join(__dirname, 'public')));
app.use(bodyParser());


var routes = require('./app/routes')(app);
var port = process.env.PORT || 3000;

// start
app.listen(port);
console.log('* TASA-web serving on port ' + port);

// db
mongoose.connect(db.URI);

mongoose.connection.on('connected', function() {
	console.log('* Mongoose connected to ' + db.URI);
});

mongoose.connection.on('disconnected', function() {
	console.log('* Mongoose disconnected to ' + db.URI);
})


// expose
exports = module.exports = app;
