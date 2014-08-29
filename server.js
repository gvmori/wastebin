
var express = require('express');
var app = express();

var wastepaper = require('./routes/wastepaper');

app.use("/app", express.static("./app"));
app.use("/app/index.html", express.static("./app/index.html"));
app.get("/wastepaper/lookup/:id", wastepaper.getWaste);
app.post("/wastepaper", wastepaper.addWaste);

// default to index.html 
app.use(function (req, res) {
  console.log("Redirecting: " + JSON.stringify(req.params));
  res.redirect("app/index.html");
});

var server = app.listen(8000, function () {
  console.log('Listening on port %d', server.address().port);
});
