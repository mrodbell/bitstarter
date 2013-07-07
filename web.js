var express = require('express'), fs=require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var inputText = fs.readFileSync("index.html");
  response.send(buf.toString(inputText));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
