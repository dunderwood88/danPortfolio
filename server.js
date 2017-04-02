// server.js

//BASE SETUP
// ===================================================================

//set up the express instance
var express = require('express'); // call express
var app = express(); // define our app using express


//access configuration settings
var cfg = require('./app/config');
app.use(express.static("./public"));


//configure the app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES for our API
require('./app/api/routes')(app);

//All other routes
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load our public/index.html file
});

var port = process.env.PORT || 8080; // set our port

module.exports = app;

//START THE SERVER
// ===================================================================
app.listen(port);
console.log('App listening on port ' + port);