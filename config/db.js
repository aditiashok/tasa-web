// imports
var mongoose = require('mongoose'),
	tasa	 = require('./tasa');

// location
var AUTH 	 = tasa.db_user + ':' + tasa.db_pass,
    PORT 	 = '29187',
    HOST	 = 'ds0' + PORT + '.mongolab.com',
    NAME 	 = 'tasa-web',
    URI		 = 'mongodb://' + AUTH + '@' + HOST + ':' + PORT + '/' + NAME; 

// schemas
var Schema   = mongoose.Schema;

var memberSchema = new Schema({
  firstname: String,
  lastname: String,
  position: String,
  listorder: Number,
  major: String,
  hometown: String,
  desc: String,
  email: String,
  year: Number,
});

var groupSchema = new Schema({
  name: String,
  desc: String,
  email: String,
  page: String,
});


// exports
module.exports.mongoose = mongoose;
module.exports.memberSchema = memberSchema;
module.exports.groupSchema = groupSchema;
module.exports.URI = URI;
