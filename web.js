var express = require('express'), fs=require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var inputText = fs.readFileSync("index.html");
  response.send(inputText.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
