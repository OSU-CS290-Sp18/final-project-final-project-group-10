/*server side java*/
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" +
  mongoUsername + ":" + mongoPassword + "@" +
  mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;

var app = express();
var port = process.env.PORT || 3003;

var postData = require('./postData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req,res, next){
  res.status(200).render('postPage', {
    data: postData}
  );
});

app.get('/addPhoto', function(req, res, next){
  if (req.body && req.body.aLink && req.body.link && req.body.caption){
    var photo = {
      Author: req.body.aLink,
      Picture: req.body.link,
      Likes: '2 likes',
      Caption: req.body.caption
    };

    var photoCollection = mongoDB.collection('photos');
    photoCollection.insertOne(
      {$push: {photos: photo}},
      function(err, result) {
        if (err){
          res.status(500).send("error inserting photo into DB.")
        } else {
          console.log("== mongo insert result: ", result);
          if (result.matchedCount > 0){
            res.status(200).end();
          } else {
            next();
          }
        }
      }
    );
  } else {
    res.status(400).send("Request needs a JSON body with author, picture, and caption.")
  }
});
app.get('*', function(req,res){
  res.status(404).render('404');
})

MongoClient.connect(mongoURL, function(err, client){
  if (err){
    console.log("== error connecting to mongo client");
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  app.listen(port, function () {
      console.log("== Server is listening on port", port);
    });
})
// app.listen(port, function () {
//     console.log("== Server is listening on port", port);
//   });
