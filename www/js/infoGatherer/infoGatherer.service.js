(function() {
  'use strict';

  angular.module('mtgx.infoGatherer')
         .factory('InfoGathererService', ['$http', '$q', InfoGathererService]);

  function InfoGathererService ($http, $q) {
    return {
      getCard: function(multiverseId) {
        var API_URL = 'https://api.magicthegathering.io/v1/cards/';
        return $http.get(API_URL+multiverseId)
        .then(function (response) {
          return response.data.card;
        })
        .catch(failedToGetInfo);
      }
    }
  }

  function failedToGetInfo (response){
    return $q.reject(response.data);
  }

})();
