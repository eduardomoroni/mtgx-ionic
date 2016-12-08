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
        return $q.when(_db.allDocs({include_docs: true, attachments: true}));
    };
  }
})();
