app.controller('LoginCtrl', function($scope) {


	$scope.loginFacebook = function() {
		auth.login('facebook', {
			// (boolean) Override default session length (browser session) to be 30 days.
			rememberMe: true,
			// (string) A comma-delimited list of requested extended permissions
			scope: 'email,user_likes'
		});
	};

	$scope.logout = function() {
		auth.logout();
	};

	var loginRef = new Firebase('https://angulartodolist.firebaseIO.com/');

	var auth = new FirebaseSimpleLogin(loginRef, function(error, user) {
		if (error) {
			// an error occurred while attempting login
			console.log(error);

			$scope.logedUser = false;
		} else if (user) {
			// user authenticated with Firebase
			console.log(user);
			
			$scope.logedUser = true;
		} else {
			// user is logged out
			$scope.logedUser = false;
		}

		$scope.$apply();
	});
});