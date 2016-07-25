(function() {
    'use strict';

  angular.module('mtgx.factories', [])
  .factory('Chats', Chats)
  .factory('ImageCrawl', ImageCrawl);


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

  function Chats() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  }

})();