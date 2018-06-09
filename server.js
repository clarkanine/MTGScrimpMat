const path = require('path');
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const Task = require('./api/models/playerModel');
// const bodyParser = require('body-parser');

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

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require(path.join(__dirname + 'routes', 'playerRoutes')); //importing route
// var routes = require(path.join(__dirname + 'modules.js')); //importing route
// routes(app); //register the route

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