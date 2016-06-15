'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.tpl.jade'),
            controller: 'HomeCtrl as vm'
        })
        .state('account', {
            url: '/account',
            template: require('./templates/account.tpl.jade'),
            controller: 'AccountCtrl as vm'
        })
    ;
}
