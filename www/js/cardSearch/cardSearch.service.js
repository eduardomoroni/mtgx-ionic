(function() {
  'use strict';

  angular.module('mtgx.cardSearch')
         .factory('CardSearchService', [CardSearchService]);

  function CardSearchService () {
      return {
        foo: function(){
          return ""
        }
      }
  }


})();
