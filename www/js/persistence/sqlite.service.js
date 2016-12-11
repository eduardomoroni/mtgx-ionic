(function () {
	'use strict';

	angular
		.module('mtgx.persistence')
		.service('SqliteService', ['$q', '$cordovaSQLite', SqliteService]);

	function SqliteService($q, $cordovaSQLite) {
		var _dbname = "mtgx";
		var _db;

		return {
			getItems: getItems,
			executeSql: executeSql
		};

		function getItems(query, parameters) {
			var deferred = $q.defer();

			executeSql(query, parameters).then(function (response) {
				var items = [];

				for (var i = 0; i < response.rows.length; i++) {
					items.push(response.rows.item(i));
				}

				return deferred.resolve(items);
				}, function (err) {
					return deferred.reject(err);
				}
			);

			return deferred.promise;
		};

		function executeSql(query, parameters) {
			return $cordovaSQLite.execute(openDB(), query, parameters);
		};

		function openDB() {
			if (!_db) {
				if (window.sqlitePlugin !== undefined) {
					_db = window.sqlitePlugin.openDatabase({ name: _dbname, location: 2, createFromLocation: 1 });
				} else {
					_db = window.openDatabase(_dbname, "1.0", "Database", 200000); // For debugging in the browser
				}
			}

			return _db;
		};

	}
})();
