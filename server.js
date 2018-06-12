/*server side java*/
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
//
// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || '27017';
// var mongoUsername = process.env.MONGO_USERNAME;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB_NAME;
//
// var mongoURL = "mongodb://" +
//   mongoUsername + ":" + mongoPassword + "@" +
//   mongoHost + ":" + mongoPort + "/" + mongoDBName;
//
// var mongoDB = null;

var app = express();
var port = process.env.PORT || 3000;

var postData = require('./postData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(bodyParser.json());
//app.use(express.static('public'));

app.get('/', function(req,res){
  res.status(200).render('postPage', {
    data: postData}
  );
});

app.get('*', function(req,res){
  res.status(404).render('404');
})
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/instogram.html'));
// });
// app.get('/layout.css', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/layout.css'));
// });
// app.get('/client.js', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/client.js'));
// });
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/404.html'));
// });
// MongoClient.connect(mongoURL, function(err, client){
//   if (err){
//     throw err;
//   }
//   mongoDB = client.db(mongoDBName);
//   app.listen(port, function () {
//       console.log("== Server is listening on port", port);
//     });
// })
app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
