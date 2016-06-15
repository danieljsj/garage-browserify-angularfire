'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
// Should I be using that @ngInject to inject things? Seems more intuitive to do this:
UserService.$inject = ['$state','$rootScope'];


function UserService($state,$rootScope) {

  // this could go a number of places; for now I'm putting in in UserService since it's related.
  var config = {
    apiKey: "AIzaSyBEZ7BgDeiduYGtIHiJeRfMELL1FW_LUX8", // public; okay to include in the repo.
    authDomain: "project-3791362246439473857.firebaseapp.com",
    databaseURL: "https://project-3791362246439473857.firebaseio.com",
    storageBucket: "project-3791362246439473857.appspot.com",
  };
  firebase.initializeApp(config);

  var creationError = {code: false, message: false};
  var loginError = {code: false, message: false};


	// adapted from: https://github.com/gordonmzhu/angular-course-demo-app-v2/blob/master/src/app/auth/auth.service.js
  // except that it had some v2.x API versions of fb data auth stuff... i think... in any case I'm simplifying and am going to include my FB data stuff here in this module more simply.

    var service = { // renamed to more generic 'service' (per the example) so we're clear about when the name matters and when it doesn't. 
  	  // firebaseAuthObject: firebaseAuthObject,
      create: create,
      creationError: creationError,
      login: login,
      loginError: loginError,
      logout: logout,
      isLoggedIn: isLoggedIn,
      getAuth: getAuth,
      getCurrentUser: getCurrentUser,
      getCurrentUserJSON: getCurrentUserJSON,
      // resetPassword: resetPassword,
      // getUserData: getUserData,
      // sendWelcomeEmail: sendWelcomeEmail,
    };


    // needed because on page refresh, it seems that the user data isn't in place yet, even if they are already logged in. So we're going to check a ton of times for a loaded user, and as soon as we've loaded it, we'll refresh everything.
    // this is a bit ugly, and there's probably a nice hook somewhere in the firebase auth process for when the user data is loaded/refreshed from firebase. Currently it's taking ~30ms for it to look like there's a user.
    var timesInitialDigestNudgeTried = 0;
    var initialDigestNudge = function(){
      console.log('isLoggedIn():',isLoggedIn());
      if (isLoggedIn()){
        $rootScope.$apply();
      } else if (1000 > ++timesInitialDigestNudgeTried){
        setTimeout(initialDigestNudge,10);
      }
    }
    initialDigestNudge();



    return service;


    ////////////

    function create(userData) {
      console.debug('Creating a user with userData: ', userData);
      // return firebaseAuthObject.$createUser(userData);

      firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .then(
        function(){
          login(userData);
        },
        function(error) {
          // Handle Errors here.
          creationError.code = error.code;
          creationError.message = error.message;
          $rootScope.$apply();
          // ...
        }
      );
    }

    function login(userData) {
      console.debug('Logging In...');
      // return firebaseAuthObject.$authWithPassword(userData);
      firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then(
        function(){
          $state.go('dashboard');
          setTimeout(function(){location.reload()},0); // hackish fix for the fact that upon login, we're not able to see our new messages until we refresh
        },
        function(error) {
          // Handle Errors here.
          loginError.code = error.code;
          loginError.message = error.message;
          $rootScope.$apply();
          // ...
        }
      );
    }

    function logout() {
      // SOME_MAIN_Service.reset(); // perhaps coming soon;
      // firebaseAuthObject.$unauth();
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        // $rootScope.$apply();
        $state.go('home');
      }, function(error) {
        // An error happened.
      });
    }

    function isLoggedIn() {
      // return firebaseAuthObject.$getAuth();
      return !! firebase.auth().currentUser;
    }

    function getAuth() {
      return firebase.auth();
    }

    function getCurrentUser() {
      return firebase.auth().currentUser;
    }

    function getCurrentUserJSON() {
      return JSON.stringify(getCurrentUser());
    }

    function resetPassword(){
      // COMINGSOON
    }

    // function getUserData(){} // COMING SOON!

    // function sendWelcomeEmail(emailAddress) {
    //   // firebaseDataService.emails.push({
    //   //   emailAddress: emailAddress
    //   // });
    // }

}
