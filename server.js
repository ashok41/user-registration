var express = require('express');
var jsonServer = require('json-server');
var app = express();

var path = 'http://localhost:3000/api/';

//path
var pathToApp = __dirname;
app.use('/static', express.static(__dirname + '/public'));
app.use('/api', jsonServer.router('db.json'));

app.get('*', function(req, res) {
  res.sendFile(pathToApp + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
