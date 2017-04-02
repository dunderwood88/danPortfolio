var request = require('request');
//var cfg = require('../../config');


exports.getFeed = function(req, res){
    
    var client_id = '91dadf19d2404ed298728925fdd52c30';
    var user_id = '210503656';
    var access_token = '210503656.91dadf1.2434aa3db892499ba13023de0e3efe52';

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