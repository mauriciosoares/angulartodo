function routeConfig($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'LoginCtrl',
			templateUrl: 'login.html'
		}).
		when('/todo', {
			controler: 'TodoCtrl',
			templateUrl: 'todo.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}

app.config(routeConfig);