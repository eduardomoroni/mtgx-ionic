(function() {
  'use strict';

  angular.module('mtgx.infoGatherer')
         .factory('InfoGathererService', ['$http', '$q', InfoGathererService]);

  function InfoGathererService ($http, $q) {
    return {
      getCard: function(multiverseId) {
        return $http.get('https://api.magicthegathering.io/v1/cards/'+multiverseId)
        .then(function (response) {
          return response.data.card;
        })
        .catch(failedToGetInfo);
      },
      isEnabled: function() {
        return true;
      }
    }
  }

  function failedToGetInfo (response){
    return $q.reject(response.data);
  }

})();
