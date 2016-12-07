(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .factory('PersistenceService', [LocalStorageService]);

  function LocalStorageService () {
    return {
      setLocalStorage: function(value, key) {
        window.localStorage.setItem(value, key);
      }
    }
  }


})();
