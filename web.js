var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync("index.html");
  response.send(buffer.toString('utf-8'));
});

var port = 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
