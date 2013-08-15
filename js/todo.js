app.controller('TodoCtrl', function($scope, LocalStorage) {
	console.log(LocalStorage);
	console.log('teste');
	$scope.todos = LocalStorage.getItem('todos');

	$scope.arcTodos = LocalStorage.getItem('arcTodos');

	$scope.addTodo = function() {
		if($scope.todoText) {
			$scope.todos.push({text: $scope.todoText});
			$scope.todoText = '';
		} else {
			alert('Didn\'t you forget something?');
		}
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
	};

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
	};

	$scope.updateTodo = function(todo, newText) {
		todo.text = newText;
	};

	$scope.updateLocalStorage = function(where, list) {
		LocalStorage.setItem('todos', $scope.todos);
		LocalStorage.setItem('arcTodos', $scope.arcTodos);
	};

	$scope.editTodo = function(index, newText) {
		if(newText) {
			$scope.todos[index].text = newText;
		} else {
			alert('Where is the text?');
		}
	};

	$scope.$watch('todos + arcTodos', function() {
		LocalStorage.setItem('todos', $scope.todos);
		LocalStorage.setItem('arcTodos', $scope.arcTodos);
	});
});