// // const express = require('express');
// // const app = express();
// // const path = require('path');
// // app.use(express.static('./dist/mtgscrimpmat'));
// // app.get('/*', function(req, res) {
// //   res.sendFile(path.join('./dist/mtgscrimpmat/index.html'));
// // });
// // app.listen(process.env.PORT || 8080);

// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 4201,
//   mongoose = require('mongoose'),
//   Task = require('./api/models/todoListModel'), //created model loading here
//   Player = require('./api/models/playerModel'), 
//   path = require("path"),
//   bodyParser = require('body-parser');
  
// // mongoose instance connection url connection
// // mongoose.Promise = global.Promise;
// // mongoose.connect('mongodb://localhost:27017'); 

// // var path = require("path");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var routes = require('./api/routes/playerRoutes'); //importing route
// // var routes = require('./api/modules.js'); //importing route
// routes(app); //register the route

// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);

// // app.use(function(req, res) {
// //     res.status(404).send({url: req.originalUrl + ' not found' + req.url + req.})
// //   });

//   var distDir = __dirname + "/src/";
//   app.use(express.static(distDir));

//   app.get('*', function(req, res) {
//     const index = path.join(__dirname, 'dist', 'index.html');
//     res.sendFile(index);
//   })
const express = require('express');
const app = express();
const path = require('path');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// ForceSSL middleware
app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});