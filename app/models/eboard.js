var db = require('../../config/db');
var EBMember = db.mongoose.model('EBMember', db.memberSchema, 'eboard');

// functions
function getAll(callback) {
    EBMember.find({}, callback);
}

function getByQuery(query, callback) {
	EBMember.find(query, callback);
}

function getByFirstName(name, callback) {
	EBMember.find({ "firstname" : name }, callback);
}

function getByLastName(name, callback) {
	EBMember.find({ "lastname" : name }, callback);
}

function getByPosition(pos, callback) {
	EBMember.find({ "position" : pos }, callback);
}

function getByYear(year, callback) {
	EBMember.find({ "year" : year }, callback);
}

// exports
module.exports.getAll				= getAll;
module.exports.getByQuery			= getByQuery;
module.exports.getByFirstName		= getByFirstName;
module.exports.getByLastName		= getByLastName;
module.exports.getByPosition		= getByPosition;
module.exports.getByYear			= getByYear;

