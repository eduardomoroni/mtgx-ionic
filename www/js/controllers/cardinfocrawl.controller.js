(function() {
  'use strict';

  angular.module('mtgx.controllers')
         .controller('CardInfoCrawlCtrl', ['RulingCrawlService', CardInfoCrawlCtrl]);

  function CardInfoCrawlCtrl (RulingCrawlService){

      var vm = this;

      vm.updateVM = function (){
        if (vm.multiverseID == undefined || vm.multiverseID == "")
        return;

        vm.viewTitle = "Crawling card #"+vm.multiverseID;
        vm.imgURL = vm.getImgURLByMultiverseId();
        vm.findCard();
      }

      vm.findCard = function () {
          RulingCrawlService.getRulings(vm.multiverseID)
          .then(function(data) {
            vm.rulings = data;
          }, function(error) {
            console.log("promessa getRulings voltou com falha");
          });
      }

      vm.getImgURLByMultiverseId = function(){
        var baseImgURL = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=";
        return baseImgURL + vm.multiverseID;
      }
  }

})();
