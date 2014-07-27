var db = require('../../config/db');
var TASAGroup = db.mongoose.model('TASAGroup', db.groupSchema, 'groups');

// functions
function getAll(callback) {
    TASAGroup.find({}, callback);
}

function getByQuery(query, callback) {
	TASAGroup.find(query, callback);
}

function getByName(name, callback) {
	TASAGroup.find({ "name" : name }, callback);
}

// exports
module.exports.getAll				= getAll;
module.exports.getByQuery			= getByQuery;
module.exports.getByName			= getByName;