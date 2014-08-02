var request = require('request');
var tasa = require('./tasa');
var default_error = { error : "there was an error in reaching facebook."}

// express API functions
function refreshToken() {
	/* displays new token on console - in practice, use the 'tasa' fb access token */
	request("https://graph.facebook.com/oauth/access_token? " + "client_id=" + tasa.appid + "&client_secret=" + tasa.appsecret + "&grant_type=client_credentials", function(err, res, body) {
		var regex = "=(.*)";
		console.log("* FB token: ", body.match(regex)[1]);
	});
}

function getEvents(res) {
	request("https://graph.facebook.com/" + tasa.pageid + "/events?access_token=" + tasa.fb_access_token, function(err, response, body) {
		if (err || response.statusCode != 200) res.send(400, default_error);
		else res.json(JSON.parse(body));
	});
}

function getAlbums(res) {
	request("https://graph.facebook.com/" + tasa.pageid + "/albums?access_token=" + tasa.fb_access_token, function(err, response, body) {
		if (err || response.statusCode != 200) res.send(400, default_error);
		else res.json(JSON.parse(body));
	});
}

function getAlbumById(id, res) {
	request("https://graph.facebook.com/" + id + "?access_token=" + tasa.fb_access_token, function(err, response, body) {
		if (err || response.statusCode != 200) res.send(400, default_error);
		else res.json(JSON.parse(body));
	});
}

function getAlbumPhotos(id, res) {
	request("https://graph.facebook.com/" + id + "/photos?access_token=" + tasa.fb_access_token, function(err, response, body) {
		if (err || response.statusCode != 200) res.send(400, default_error);
		else res.json(JSON.parse(body));
	});
}


// exports
module.exports.refreshToken 	= refreshToken;
module.exports.getEvents 		= getEvents;
module.exports.getAlbums		= getAlbums;
module.exports.getAlbumById		= getAlbumById;
module.exports.getAlbumPhotos	= getAlbumPhotos;