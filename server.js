
var express = require('express');
var app = express();

var mongo = require('mongodb');

var wastepaper = require('./routes/wastepaper');


app.get("/wastepaper/:id", wastepaper.getWaste);
app.post("/wastepaper", wastepaper.addWaste);

// default to index.html 
app.use(function (req, res) {
  console.log("Redirecting: " + req);
  res.redirect("app/index.html");
});

var server = listen = app.listen(8000, function () {
  console.log('Listening on port %d', server.address().port);
});


