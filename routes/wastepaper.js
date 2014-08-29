
var mongo = require('mongodb');

var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, { auto_reconnect: true });
var db = new Db('wastedb', server, { w: 1 });

db.open(function (err, db) {
  if (!err) {
    console.log("Connected to waste db");
  } else {
    console.log("Error connecting to waste db");
  }
});

exports.addWaste = function (req, res) {
  var newWaste = req.body;
  console.log('Adding waste: ' + JSON.stringify(newWaste));

  db.collection('waste', function (err, collection) {
    collection.insert(newWaste, {}, function (err, result) {
      if (err) {
        console.log("Error: Unable to insert waste!");
        res.send({'error': 'Unable to insert waste'});
      } else {
        console.log("Success: " + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
};

exports.getWaste = function (req, res) {
  var id = req.params.id;
  console.log('Getting waste: ' + id);

  db.collection('waste', function (err, collection) {
    collection.findOne({ '_id' : new BSON.ObjectID(id)}, function (err, item) {
      if (err) {
        console.log("Unable to look up id: " + id);
        res.send({'error': 'Unable to look up id'});
      } else {
        console.log("Found waste: " + JSON.stringify(item));
        res.send(item);
      }
    });
  });
};

