var express = require('express');
var fs = require('fs');

module.exports = function(app){
    //ROUTES for our API
    // ===================================================================
    var router  = express.Router(); //get an instance of the express Router

    // middleware to use for all requests
    router.use(function(req, res, next){
        //do logging
        console.log('API request.');
        next(); //make sure we go to the next routes and don't stop here
    });


    // test router to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function(req, res){
        res.json({
            message: 'hooray! welcome to our api!'
        });
    });

    //require all routes files
    var files = fs.readdirSync('./app/api/routes/');
    for (var i in files){
        if (files[i] !== 'index.js')
            require('./' + files[i].substr(0, files[i].lastIndexOf('.')))(router)
    }

    //REGISTER OUR ROUTES
    // all of our API routes will be prefixed with /api
    app.use('/api', router);
}