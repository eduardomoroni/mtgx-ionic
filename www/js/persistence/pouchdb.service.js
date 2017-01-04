(function () {
	'use strict';

	angular
		.module('mtgx.persistence')
		.service('PouchDBService', ['$q', PouchDBService]);

	function PouchDBService($q) {
    var _db;


    return {
        initDB: initDB,
        getAllDocuments: getAllDocuments,
				findById: findById
    };

    function initDB(name, options) {
        _db = new PouchDB(name, options);
				var remoteDB = new PouchDB('http://localhost:5984/cards');

				remoteDB.replicate.to(_db, {live:false}, function(err){
				        console.err(err);
				});
    };

		function findById(documentId) {
			var deferred = $q.defer();
			var params = {include_docs: true, attachments: true, key: documentId};

			_db.allDocs(params).then(function (response) {
				var items = [];

				for (var i = 0; i < response.rows.length; i++) {
					items.push(response.rows[i].doc);
				}

				return deferred.resolve(items);
				}, function (err) {
					return deferred.reject(err);
				}
			);

			return deferred.promise;
		}

    function getAllDocuments() {
			var deferred = $q.defer();
			var params = {include_docs: true, attachments: true};

			_db.allDocs(params).then(function (response) {
				var items = [];

				for (var i = 0; i < response.rows.length; i++) {
					items.push(response.rows[i].doc);
				}

				return deferred.resolve(items);
				}, function (err) {
					return deferred.reject(err);
				}
			);

			return deferred.promise;
    };
  }
})();
