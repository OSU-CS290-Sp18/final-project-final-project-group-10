/*server side java*/
var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/instogram.html'));
});
app.get('/layout.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/layout.css'));
});
app.get('/client.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/client.js'));
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/404.html'));
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
