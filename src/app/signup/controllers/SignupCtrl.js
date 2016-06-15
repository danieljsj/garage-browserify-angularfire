'use strict';

module.exports = SignupCtrl; 

/**
 * @ngInject
 */
function SignupCtrl(UserService) { 

    var vm = this; 

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.signup = UserService.create;
    vm.signupError = UserService.creationError;

}