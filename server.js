var express = require('express');
var app = express();
app.get('/', function(request, response) {
  response.send('My little bot can\'t be this functional.');
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ', port);
});
var imout = require('./imouto.js');