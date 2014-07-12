// imports
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    ObjectId = Schema.ObjectId

// schemas
var photoSchema = new Schema({
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
  photo: photoSchema
});

/*
 * eventSchema
 * groupSchema
 *
 */

// exports
module.exports.mongoose = mongoose;
module.exports.EBMember = EBMember;

// db
mongoose.connect('mongodb://localhost:27017');
