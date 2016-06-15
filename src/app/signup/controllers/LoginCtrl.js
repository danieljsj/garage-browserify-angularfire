'use strict';

module.exports = LoginCtrl; 

/**
 * @ngInject
 */
function LoginCtrl(UserService) { 

    var vm = this; 

    // COMMON:
    


    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.login = UserService.login;
    vm.loginError = UserService.loginError;

}