'use strict';

module.exports = HomeCtrl; 

/**
 * @ngInject
 */

HomeCtrl.$inject = ['UserService','TriggeringService'];
function HomeCtrl(UserService,  TriggeringService) { 

    var vm = this; 

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;

    // controller-specific:
    vm.triggerings = TriggeringService.triggerings;
    vm.addTriggering = TriggeringService.addTriggering;

}