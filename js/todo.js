function TodoCtrl($scope) {
	'use strict';

	$scope.todos = [
		{text: 'learn angular', done: false},
		{text: 'build an angular app', done: false}
	];

	$scope.arcTodos = [];

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.todoText});
		$scope.todoText = '';
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			if(!todo.done) {
				count += 1;
			}
		});
		return count;
	};

	$scope.allArcTodos = function() {
		return $scope.arcTodos.length;
	}

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];

		angular.forEach(oldTodos, function(todo) {
			if(!todo.done) {
				$scope.todos.push(todo);
			}else{
				$scope.arcTodos.push(todo);
			}
		});
	}

	$scope.updateTodo = function(todo, newText) {
		console.log($scope.todos.length);
		todo.text = newText;
	};

}