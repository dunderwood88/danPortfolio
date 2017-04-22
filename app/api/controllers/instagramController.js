var request = require('request');
//var cfg = require('../../config');


exports.getFeed = function(req, res){

    var user_id = process.env.INSTA_USER;
    var access_token = process.env.INSTA_ACCESS;

    var endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/';
        endpoint += '?count=9';
        //endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;

        request(endpoint, function (error, response, body) {
            if (error) {
                console.error(error);
            }else{
                res.contentType('application/json');
                res.send(body);
            }
        });

};