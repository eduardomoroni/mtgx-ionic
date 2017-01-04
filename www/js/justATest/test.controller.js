(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .controller('TestCtrl', ['PouchDBService', TestCtrl]);

  function TestCtrl (PouchDBService){

      var vm = this;

      vm.test = function(documentId){
        // getById(documentId);
        getAll();
      }

      function getAll (){
        PouchDBService.getAllDocuments().then(function (response) {
          vm.Obj = response;
          }, function (err) {
            console.log(err);
          }
        );
      }

      function getById (docId){
        PouchDBService.findById(docId).then(function (response) {
          vm.Obj = response;
          }, function (err) {
            console.log(err);
          }
        );
      }

  }

})();
