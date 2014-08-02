var https = require('https');
var tasa = require('./tasa');

module.exports.authorize = function() {
	var options = {
		host	: 'graph.facebook.com',
		port 	: 443,
		path	: '/oauth/access_token?%20client_id=705203702862711%20&client_secret=f923ee308726f9e99a59f73b65c3d283&grant_type=client_credentials'
	};

	https.get(options, function(res) {
		console.log("status:", res.statusCode);
		console.log("headers:", res.headers);
		return res;

		  var bodyChunks = [];
		  res.on('data', function(chunk) {
		    // You can process streamed parts here...
		    bodyChunks.push(chunk);
		  }).on('end', function() {
		    var body = Buffer.concat(bodyChunks);
		    console.log('BODY: ' + body);
		    // ...and/or process the entire body here.
		  })

		
	});
}

module.exports.getstuff = function() {
	var options = {
		host	: 'graph.facebook.com',
		port 	: 443,
		path	: '/547996028578993/albums/'
	};

	https.get(options, function(res) {
		console.log("status:", res.statusCode);
		console.log("headers:", res.headers);
		return res;
	});
}