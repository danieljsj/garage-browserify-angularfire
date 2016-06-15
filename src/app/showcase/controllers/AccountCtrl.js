'use strict';

module.exports = AccountCtrl; 

/**
 * @ngInject
 */

AccountCtrl.$inject = ['UserService','ChatService']; 
function AccountCtrl(   UserService,  ChatService) { 

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