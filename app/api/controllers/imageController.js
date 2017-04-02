var querystring = require('querystring');
var request = require('request');
var fs = require('fs');
var path = require('path');
//var cfg = require('../../config');

exports.getImages = function(req, res){

    var files = [];

    fs.readdir('public/images/portfolio', function(err, list){
        for(i=0; i < list.length; i++){
            if(path.extname(list[i]) == '.jpg'){
                files.push('/images/portfolio/' + list[i]);

                console.log('/images/portfolio/' + list[i]);
            }
        }
        
        res.contentType('application/json');
        res.send(JSON.stringify(files));

    });

};