'use strict';

module.exports = TriggeringService;

TriggeringService.$inject = ['UserService','$rootScope','$timeout']; // theoretically I should be injecting angular references instead of just calling the global angular (which I'm also doign in UserService) but I haven't yet found good documentation on using the new firebase within RequireJS/Require() etc.
function TriggeringService(   UserService,  $rootScope,  $timeout){
	
	var triggeringsRef = firebase.database().ref('triggerings'); // 'firebase' was initialized in UserService. (TODO: should probably be injected)
	
	triggeringsRef.on('child_added',function(snapshot){
		console.log(snapshot.val());
		triggerings.push(snapshot.val());
		$timeout(function(){$rootScope.$apply();});
		console.log(triggerings);
	});

	var triggerings = [];

	////

	var service = {
		// getTriggeringsReadonly: getTriggeringsReadonly,
		triggerings: triggerings,
		addTriggering: addTriggering,
	};

	return service;

	/////

	// function getTriggeringsReadonly(){
	// 	return JSON.parse(JSON.stringify(triggerings)); // because I want to send a copy; don't wany the controller to have (or think it has) access to the originals.
	// }

	function addTriggering(){
		triggeringsRef.push({
			senderEmail: UserService.getCurrentUser().email,
			timestamp: (new Date()).getTime(),
			// senderId:
		})
	}

}