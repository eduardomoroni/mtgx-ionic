(function () {
	'use strict';

	//TODO: Find out a better way to do that;
	//THIS IS REALLY DUMB
	var initializationQuery = [
		//"CREATE TABLE IF NOT EXISTS settings (key text primary key, value text);"
		//"INSERT INTO 'settings' ('key','value') VALUES ('language','pt-br');"
	];

	var DBNAME = "mtgx";

	angular
		.module('mtgx.persistence')
		.service('SqliteService', ['$q', '$cordovaSQLite', SqliteService]);

	function SqliteService($q, $cordovaSQLite) {
		var _db;

		this.getItems = function (query, parameters) {
			var deferred = $q.defer();

			this.executeSql(query, parameters).then(function (response) {
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

		this.executeSql = function (query, parameters) {
			return $cordovaSQLite.execute(this.openDB(), query, parameters);
		};

		this.openDB = function () {
			if (!_db) {
				if (window.sqlitePlugin !== undefined) {
					_db = window.sqlitePlugin.openDatabase({ name: DBNAME, location: 2, createFromLocation: 1 });
				} else {
					// For debugging in the browser
					_db = window.openDatabase(DBNAME, "1.0", "Database", 200000);
					console.log(_db);
				}
			}

			return _db;
		};

		//THIS IS A WAY TO USE A PREPOPULATED DB
		this.copyDB = function(){
			window.plugins.sqlDB.copy(DBNAME, function() {
					_db = $cordovaSQLite.openDB(DBNAME);
			}, function(error) {
					console.error("There was an error copying the database: " + error);
					_db = $cordovaSQLite.openDB(DBNAME);
			});

			return _db;
		}

		this.isDdInitiated = function () {
			return false;
		};

		//TODO: REFACTOR
		this.initDB = function () {
			if(this.isDdInitiated()){

			} else {

			}

			var deferred = $q.defer();

			if (window.sqlitePlugin === undefined) {
				this.openDB().transaction(function (db) {
					for (var i = 0; i < initializationQuery.length; i++) {
						var query = initializationQuery[i].replace(/\\n/g, '\n');
						db.executeSql(query);
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

	}
})();
