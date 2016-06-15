'use strict';

module.exports = ChatService;

ChatService.$inject = ['UserService','$rootScope','$timeout']; // theoretically I should be injecting angular references instead of just calling the global angular (which I'm also doign in UserService) but I haven't yet found good documentation on using the new firebase within RequireJS/Require() etc.
function ChatService(   UserService,  $rootScope,  $timeout){
	
	var messagesRef = firebase.database().ref('messages');
	
	messagesRef.on('child_added',function(snapshot){
		console.log(snapshot.val());
		messages.push(snapshot.val());
		$timeout(function(){$rootScope.$apply();});
		console.log(messages);
	});

	var messages = [];

	////

	var service = {
		getMessagesReadonly: getMessagesReadonly,
		messages: messages,
		addMessage: addMessage,
	};

	return service;

	/////

	function getMessagesReadonly(){
		return JSON.parse(JSON.stringify(messages)); // because I want to send a copy; don't wany the controller to have (or think it has) access to the originals.
	}

	function addMessage(text){
		messagesRef.push({
			text: text,
			senderEmail: UserService.getCurrentUser().email,
			timestamp: (new Date()).getTime(),
			// senderId:
		})
	}

}