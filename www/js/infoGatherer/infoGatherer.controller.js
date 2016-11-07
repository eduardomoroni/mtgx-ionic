(function() {
  'use strict';

  angular.module('mtgx.controllers')
         .controller('InfoGathererCtrl', ['InfoGathererService', InfoGathererCtrl]);

  function InfoGathererCtrl (InfoGathererService){

      var vm = this;
      vm.ObjCard = {};

      vm.findCard = function (multiverseID) {
          InfoGathererService.getCard(multiverseID)
          .then(function(card) {
            vm.ObjCard.rulings = card.rulings;
            vm.ObjCard.name = card.name;
            vm.ObjCard.imgURL = card.imageUrl;
          }, function(error) {
            console.log("promessa getRulings voltou com falha");
          });
      }
  }

})();
