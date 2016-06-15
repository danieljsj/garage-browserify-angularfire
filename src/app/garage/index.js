'use strict';

require('angular')
    .module('bookbottles.garage', [
        /* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Custom */
        require('../signup')
    ])
    .config(require('./config'))
    .config(require('./route'))
    .factory('ChatService', require('./services/ChatService'))
    .factory('TriggeringService', require('./services/TriggeringService'))
    .controller('AccountCtrl', require('./controllers/AccountCtrl'))
    .controller('HomeCtrl', require('./controllers/HomeCtrl'))



    // DEBUG TOOL PLACED INELEGANTLY HERE DUE TO TIME CONSTRAINTS:
    .filter('debug', function() {
      return function(input) {
        if (input === '') return 'empty string';
        return input ? input : ('' + input);
      };
    })


;
