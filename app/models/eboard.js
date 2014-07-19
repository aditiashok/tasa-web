var db = require('../../config/db');
var EBMember = db.mongoose.model('EBMember', db.memberSchema, 'eboard');

// functions

// exports
module.exports.EBMember = EBMember;
