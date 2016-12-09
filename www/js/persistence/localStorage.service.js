(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .factory('LocalStorageService', [LocalStorageService]);

  function LocalStorageService () { //TODO: Conversar se isso é benefico

    return {
      setItem: function(value, key) {
        window.localStorage.setItem(value, key);
      },
      getItem: function(value) {
        return window.localStorage.getItem(value);
      }
    }
  }

})();
