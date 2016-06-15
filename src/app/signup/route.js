'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('signup', {
            url: '/signup',
            template: require('./templates/signup.tpl.jade'),
            controller: 'SignupCtrl as vm'
        })
        .state('login', {
        	url: '/login',
        	template: require('./templates/login.tpl.jade'),
        	controller: 'LoginCtrl as vm'
        })
        ;
}
