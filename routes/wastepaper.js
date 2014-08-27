
var mongo = require('mongodb');

var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure;

exports.addWaste = function (req, res) {
  var id = req.params.id;
  console.log('Adding waste: ' + req);
};

exports.getWaste = function (req, res) {
  var id = req.params.id;
  console.log('Getting waste: ' + id);
  
};

