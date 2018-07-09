'use strict';
module.exports = function (app) {
    var controller = require('../controllers/ContactsController');

    app.route('/contacts')
        .get(controller.data)
        .post(controller.data)
};
