app.factory('LocalStorage', function() {
	'use strict';

	var ls =  window.localStorage;

	var setItem = function(where, list) {
		ls.setItem(where, JSON.stringify(list));
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