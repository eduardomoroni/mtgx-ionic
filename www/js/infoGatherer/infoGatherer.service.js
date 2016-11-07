(function() {
  'use strict';

  angular.module('mtgx.services')
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
      foo: function() {
        return "bar";
      }
    }
  }

  function sucess (response) {
    console.log('response', response);

  }

  function failedToGetInfo (response){
    return $q.reject(response.data);
  }

})();
