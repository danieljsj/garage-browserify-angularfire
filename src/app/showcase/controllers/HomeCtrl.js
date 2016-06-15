'use strict';

module.exports = DashboardCtrl; 

/**
 * @ngInject
 */

DashboardCtrl.$inject = ['UserService'];

function DashboardCtrl(UserService) { 

    var vm = this; 

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:


}