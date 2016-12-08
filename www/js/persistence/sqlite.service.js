(function () {
	'use strict';

	angular
		.module('mtgx.persistence')
		.service('SqliteService', ['$q', '$cordovaSQLite', SqliteService]);

	function SqliteService($q, $cordovaSQLite) {
		var self = this;
		var _db;

		self.initDB = function (parameters) {
			if (!_db) {
				if (window.sqlitePlugin !== undefined) {
					_db = window.sqlitePlugin.openDatabase(parameters);
				} else {
          // For debugging in the browser
					_db = window.openDatabase(parameters.name, "1.0", "Database", 200000);
				}
			}
			return _db;
		};

		self.getItems = function (query, parameters) {
			var deferred = $q.defer();

			self.executeSql(query, parameters).then(function (res) {
				var items = [];
				for (var i = 0; i < res.rows.length; i++) {
					items.push(res.rows.item(i));
				}

				return deferred.resolve(items);
			});

			return deferred.promise;
		};

		self.executeSql = function (query, parameters) {
      var deferred = $q.defer();

      $cordovaSQLite.execute(self.db(), query, parameters)
      .then(function (result) {
        deferred.resolve(result);
      }, function (error) {
        console.warn('Error on executing SQLite query:');
        console.warn(error);
        deferred.reject(error);
      });

      return deferred.promise;
		};
	}
})();
