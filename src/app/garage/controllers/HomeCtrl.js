'use strict';

module.exports = AccountCtrl; 

/**
 * @ngInject
 */

AccountCtrl.$inject = ['UserService'];

function AccountCtrl(UserService) { 

    var vm = this; 

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:


}