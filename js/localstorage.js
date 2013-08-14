app.factory('LocalStorage', function() {
	// firebase tests
	var db = new Firebase('https://angulartodolist.firebaseIO.com/');

	// local storage
	var ls =  window.localStorage;

	var setItem = function(where, list) {
		ls.setItem(where, JSON.stringify(list));
		db.set(JSON.stringify(list));
	};

	var getItem = function(from) {
		if(from) {
			var todos = ls.getItem(from);

			if(todos) {
				return JSON.parse(todos);
			}else {
				return [];
			}
		} else {
			return [];
		}
	};

	return {
		setItem: setItem,
		getItem: getItem
	};
});