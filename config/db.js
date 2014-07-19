// imports
var mongoose = require('mongoose');
var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var HOST = 'localhost',
    PORT = '27017',
    NAME = 'tasa14-15',
    URI = 'mongodb://' + HOST + ':' + PORT + '/' + NAME; 

// schemas
var photoSchema = new Schema({
  desc: String
  /* how to store...? */
});

var memberSchema = new Schema({
  firstname: String,
  lastname: String,
  position: String,
  major: String,
  hometown: String,
  desc: String,
  email: String,
  year: Number,
  photos: [photoSchema]
});

var eventSchema = new Schema({
  name: String,
  startime: String,
  endtime: String,
  desc: String,
  location: String 
});
/*
 * eventSchema
 * groupSchema
 *
 */

// exports
module.exports.mongoose = mongoose;
module.exports.memberSchema = memberSchema;
module.exports.URI = URI;