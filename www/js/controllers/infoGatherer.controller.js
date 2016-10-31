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

// Hebert

(function() {
  'use strict';
  angular.module('mtgx.controllers')
         .controller('InfoGathererCtrl', InfoGathererCtrl);

         InfoGathererCtrl.$inject = ['InfoGathererService'];

          function InfoGathererCtrl (InfoGathererService){

              var vm = this;
              // variaveis que vão para view declaradas no topo -- Agrupamento de caracteristicas em Objetos. 
              vm.findCard = findCard();
              vm.ObjCard  = {};

              // function para isolar todas sa funcionalidades do controller
              function findCard () {
                  InfoGathererService.getCard(vm.multiverseID)
                  .then(function(card) {
                        vm.ObjCard.rulings  = card.rulings;
                        vm.ObjCard.name     = card.name;
                        vm.ObjCard.imgURL   = card.imageUrl;
                    console.log(card);
                  }, function(error) {
                    console.log("promessa getRulings voltou com falha");
                  });
              }
          }

})();
