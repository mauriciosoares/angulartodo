function TodoCtrl($scope) {
	'use strict';

	$scope.todos = [
		{text: 'learn angular', done: false},
		{text: 'build an angular app', done: false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.todoText});
		$scope.todoText = '';
		console.log('teste');
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			if(!todo.done) {
				count += 1;
			}
		});
		return count;
	}
}