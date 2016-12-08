(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .factory('LocalStorageService', ['$cordovaSQLite', LocalStorageService]);

  function LocalStorageService () { //TODO: Conversar se isso é benefico

    return {
      setLocalStorage: function(value, key) {
        window.localStorage.setItem(value, key);
      },
      getLocalStorage: function(value) {
        window.localStorage.getItem(value);
      }
    }
  }

})();
