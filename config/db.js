// imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var url = 'mongodb://localhost:27017';

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

/*
 * eventSchema
 * groupSchema
 *
 */

// exports
module.exports.mongoose = mongoose;
module.exports.memberSchema = memberSchema;
module.exports.url = url;
