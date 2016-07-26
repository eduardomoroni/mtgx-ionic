(function() {
  'use strict';

  angular.module('mtgx.services').factory('RulingCrawl', RulingCrawl);

  function RulingCrawl ($http, $q) {
    return {
      getRulings: function(multiverseId) {
        return $http.get('https://api.magicthegathering.io/v1/cards/'+multiverseId)
        .then(getRulingsSuccess,getRulingsFailed);
      }
    }
  }

  function getRulingsSuccess(response) {
    return response.data.card.rulings;
  }

  function getRulingsFailed (response){
    return $q.reject(response.data);
  }

})();
