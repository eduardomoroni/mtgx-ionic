(function () {
	'use strict';

	angular
		.module('mtgx.persistence')
		.service('PouchDBService', ['$q', PouchDBService]);

	function PouchDBService($q) {
    var _db;
    var _documents;

    return {
        initDB: initDB,
        getAllDocuments: getAllDocuments,
        addDocument: addDocument,
        updateDocument: updateDocument,
        deleteDocument: deleteDocument
    };

    function initDB(name, options) {
        _db = new PouchDB(name, options);
    };

    function addDocument(document) {
      return $q.when(_db.post(document));
    };

    function updateDocument(document) {
      return $q.when(_db.put(document));
    };

    function deleteDocument(document) {
      return $q.when(_db.remove(document));
    };

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
