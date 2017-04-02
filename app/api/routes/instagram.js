var instaControl = require('../controllers/instagramController');

module.exports = function(router){

    router.route('/instafeed')

        //search for tracks
        .get(instaControl.getFeed);

}