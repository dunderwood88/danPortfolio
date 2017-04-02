var imageControl = require('../controllers/imageController');

module.exports = function(router){

    router.route('/images')

        //search for tracks
        .get(imageControl.getImages);

}