var mailControl = require('../controllers/mailController');

module.exports = function(router){

    router.route('/mail/send')

        //search for tracks
        .post(mailControl.send);

}