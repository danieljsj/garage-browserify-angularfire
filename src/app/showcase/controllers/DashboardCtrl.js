'use strict';

module.exports = DashboardCtrl; 

/**
 * @ngInject
 */

DashboardCtrl.$inject = ['UserService','ChatService']; 
function DashboardCtrl(   UserService,  ChatService) { 

	console.log(UserService, ChatService);

    var vm = this; 

    vm.foo = 'bar';

    // controllers/modules common: // todo:find a better way...
    vm.userIsLoggedIn = UserService.isLoggedIn;
    vm.getCurrentUser = UserService.getCurrentUser;
    vm.getCurrentUserJSON = UserService.getCurrentUserJSON;


    // controller-specific:
    vm.logout = UserService.logout;

    vm.addChatMessage = ChatService.addMessage;
	vm.getChatMessagesReadonly = ChatService.getMessagesReadonly;
	vm.chatMessages = ChatService.messages;

}