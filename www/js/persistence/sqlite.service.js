(function () {
	'use strict';

	//TODO: Find out a better way to do that;
	//THIS IS REALLY DUMB
	var initializationQuery = [
		"CREATE TABLE IF NOT EXISTS settings (key text primary key, value text);"
		//"INSERT INTO 'settings' ('key','value') VALUES ('language','pt-br');"
	];

	angular
		.module('mtgx.persistence')
		.service('SqliteService', ['$q', '$cordovaSQLite', SqliteService]);

	function SqliteService($q, $cordovaSQLite, LogService) {
		var _db;

		this.db = function () {
			if (!_db) {
				if (window.sqlitePlugin !== undefined) {
					_db = window.sqlitePlugin.openDatabase({ name: "mtgx.db", location: 2, createFromLocation: 1 });
				} else {
					// For debugging in the browser
					_db = window.openDatabase("mtgx.db", "1.0", "Database", 200000);
				}
			}
			return _db;
		};

		this.getFirstItem = function (query, parameters) {
			var deferred = $q.defer();
			this.executeSql(query, parameters).then(function (res) {

				if (res.rows.length > 0){
					return deferred.resolve(res.rows.item(0));
				}
				else
					return deferred.reject("There aren't items matching");
			}, function (err) {
				return deferred.reject(err);
			});

			return deferred.promise;
		};

		this.getFirstOrDefaultItem = function (query, parameters) {
			var deferred = $q.defer();
			this.executeSql(query, parameters).then(function (res) {

				if (res.rows.length > 0)
					return deferred.resolve(res.rows.item(0));
				else
					return deferred.resolve(null);
			}, function (err) {
				return deferred.reject(err);
			});

			return deferred.promise;
		};

		this.getItems = function (query, parameters) {
			var deferred = $q.defer();
			this.executeSql(query, parameters).then(function (res) {
				var items = [];
				for (var i = 0; i < res.rows.length; i++) {
					items.push(res.rows.item(i));
				}
				return deferred.resolve(items);
			}, function (err) {
				return deferred.reject(err);
			});

			return deferred.promise;
		};

		//TODO: REFACTOR
		this.startDB = function (enableLog) {
			var deferred = $q.defer();

			if (window.sqlitePlugin === undefined) {
				this.db().transaction(function (tx) {
					for (var i = 0; i < initializationQuery.length; i++) {
						var query = initializationQuery[i].replace(/\\n/g, '\n');
						tx.executeSql(query);
					}
				}, function (error) {
					deferred.reject(error);
				}, function () {
					deferred.resolve("OK");
				});
			}
			else {
				deferred.resolve("OK");
			}

			return deferred.promise;
		};

		this.executeSql = function (query, parameters) {
			return $cordovaSQLite.execute(this.db(), query, parameters);
		};
	}
})();
