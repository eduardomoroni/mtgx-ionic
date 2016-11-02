(function() {
  'use strict';

  angular.module('mtgx')
         .factory('InfoGathererService', ['$http', '$q', InfoGathererService]);

  function InfoGathererService ($http, $q) {
    return {
      getCard: function(multiverseId) {
        return $http.get('https://api.magicthegathering.io/v1/cards/'+multiverseId)
        .then(sucess,failedToGetInfo);
      }
    }
  }

  function sucess (response){
    return response.data.card;
  }

  function failedToGetInfo (response){
    return $q.reject(response.data);
  }

})();
