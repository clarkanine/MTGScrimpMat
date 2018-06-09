
var express = require('express'),
app = express(),
port = process.env.PORT || 4201,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'), //created model loading here
Player = require('./api/models/playerModel'), 
path = require("path"),
bodyParser = require('body-parser');

// const path = require('path');
// const express = require('express');
// const app = express();

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
console.log(__dirname);
app.use(express.static(__dirname + '/dist/MtgScrimpMat'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MtgScrimpMat/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static('./dist/mtgscrimpmat'));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join('./dist/mtgscrimpmat/index.html'));
// });
// app.listen(process.env.PORT || 8080);


  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017'); 

// var path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/playerRoutes'); //importing route
// var routes = require('./api/modules.js'); //importing route
routes(app); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found' + req.url + req.})
  });