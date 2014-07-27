// imports
var mongoose = require('mongoose');
var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var HOST = 'localhost',
    PORT = '27017',
    NAME = 'tasa14-15',
    URI = 'mongodb://' + HOST + ':' + PORT + '/' + NAME; 

// schemas
var memberSchema = new Schema({
  firstname: String,
  lastname: String,
  position: String,
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