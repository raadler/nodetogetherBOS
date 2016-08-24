var express = require('express');
var app = express();

app.get("/", function(request, response) {
  response.send("Beware of cat!");
});

module.exports = app;
