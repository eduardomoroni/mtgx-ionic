(function() {
    'use strict';

  angular.module('mtgx.services').factory('ImageCrawl', ImageCrawl);

  function ImageCrawl ($http, $q){
    apiURL = "https://api.magicthegathering.io/v1/cards/";

    return {
      getRulings: function() {
        return $http.get(apiURL+multiverseId)
          .then(function(response) {
            console.log("Ruling #"+multiverseId+" retrieve success!")
            console.log(response.card.rulings);
            return response.card.rulings;
          }, function(response) {
            console.log("Failed to retrieve data from "+apiURL+multiverseId);
            return $q.reject(response.data);
          });
      }
    };
  }

})();