'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [ 
    	/* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Custom */

    ])
    .config(require('./route')) 
    .controller('SignupCtrl', require('./controllers/SignupCtrl'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .factory('UserService', require('./services/UserService')) 
    .name;
