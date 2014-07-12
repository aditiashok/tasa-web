// modules
var root = __dirname,
		express = require('express'),
		path = require('path');

var app = express();

// configuration
var port = process.env.PORT || 3000;

// start
app.listen(port);
console.log('* TASA-web serving on port ' + port + ' *');

app.get('/', function(req, res) {
	res.send({
			msg: "hello, world!",
		});
		/* routes will be in ./app/routes */
});

// expose
exports = module.exports = app;
