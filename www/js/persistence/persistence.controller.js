(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .controller('PersistenceCtrl', ['LocalStorageService', 'PouchDBService', PersistenceCtrl]);

  function PersistenceCtrl (LocalStorageService, PouchDBService){

      var vm = this;
      vm.Obj = {};

      vm.test = function(value){

      }
  }

})();
