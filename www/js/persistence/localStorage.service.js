(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .service('LocalStorageService', [LocalStorageService]);

  //TODO: Conversar se isso é benefico
  function LocalStorageService () {

    return {
      setItem: setItem,
      getItem: getItem
    };

    function setItem(value, key) {
      window.localStorage.setItem(value, key);
    };

    function getItem(value) {
      return window.localStorage.getItem(value);
    };
  }

})();
