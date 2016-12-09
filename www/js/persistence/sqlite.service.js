(function () {
	'use strict';

	angular
		.module('mtgx.persistence')
		.service('SqliteService', ['$q', '$cordovaSQLite', SqliteService]);

	function SqliteService($q, $cordovaSQLite) {
		//TODO: DELETE THIS SHIT, IS BEING USED TO POPULATE WEB DB
		window.queries = [
			//Create tables
			//"CREATE TABLE IF NOT EXISTS settings (key text primary key, value text);",
			//Insert Users
			//"INSERT INTO 'settings' ('key','value') VALUES ('language','pt-br');"
		];

		var self = this;
		var _db;

		self.db = function () {
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

		self.getFirstItem = function (query, parameters) {
			var deferred = $q.defer();
			self.executeSql(query, parameters).then(function (res) {

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

		self.getFirstOrDefaultItem = function (query, parameters) {
			var deferred = $q.defer();
			self.executeSql(query, parameters).then(function (res) {

				if (res.rows.length > 0)
					return deferred.resolve(res.rows.item(0));
				else
					return deferred.resolve(null);
			}, function (err) {
				return deferred.reject(err);
			});

			return deferred.promise;
		};

		self.getItems = function (query, parameters) {
			var deferred = $q.defer();
			self.executeSql(query, parameters).then(function (res) {
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

		//TODO: Remove This
		self.preloadDataBase = function (enableLog) {
			var deferred = $q.defer();


			if (window.sqlitePlugin === undefined) {
				self.db().transaction(function (tx) {
					for (var i = 0; i < window.queries.length; i++) {
						var query = window.queries[i].replace(/\\n/g, '\n');
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

		self.executeSql = function (query, parameters) {
			return $cordovaSQLite.execute(self.db(), query, parameters);
		};
	}
})();
