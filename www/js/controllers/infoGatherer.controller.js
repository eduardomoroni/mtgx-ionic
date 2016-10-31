(function() {
  'use strict';

  angular.module('mtgx.controllers')
         .controller('InfoGathererCtrl', ['InfoGathererService', InfoGathererCtrl]);

  function InfoGathererCtrl (InfoGathererService){

      var vm = this;
      vm.findCard = function () {
          InfoGathererService.getCard(vm.multiverseID)
          .then(function(card) {
            vm.rulings = card.rulings;
            vm.name = card.name;
            vm.imgURL = card.imageUrl;
            console.log(card);
          }, function(error) {
            console.log("promessa getRulings voltou com falha");
          });
      }
  }

})();
