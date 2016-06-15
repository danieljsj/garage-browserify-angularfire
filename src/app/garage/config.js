'use strict';

module.exports = config;

/**
 * @ngInject
 */
function config($urlRouterProvider, $locationProvider) { // param names used to get services. the "simpler" albeit potentially more confusing&conflicting way to do it... OR maybe that's what the @ngInject is saying. Which I find a little odd; I don't love the idea of using comments for prod functionality

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

}
