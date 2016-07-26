(function() {
  'use strict';

  angular.module('mtgx.controllers').controller('CardInfoCrawlCtrl', CardInfoCrawlCtrl);

  CardInfoCrawlCtrl.$inject = ['$scope', '$http', 'RulingCrawl'];
  function CardInfoCrawlCtrl ($scope, $http, RulingCrawl){

    $scope.fetchCardInformations = function (multiverseInput){
      if ($scope.multiverseInput == undefined || $scope.multiverseInput == "")
      return;

      var multiverseId = $scope.multiverseInput;
      $scope.viewTitle = "Crawling card #"+multiverseId;
      $scope.imgURL = getImgURLByMultiverseId(multiverseId);
      getRulings(RulingCrawl,$scope,multiverseId);
    }
  }

  function getImgURLByMultiverseId(multiverseId){
    var baseImgURL = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=";
    return baseImgURL + multiverseId;
  }

  function getRulings(RulingCrawl, $scope, multiverseId) {
    RulingCrawl.getRulings(multiverseId)
    .then(function(data) {
      $scope.rulings = data;
    }, function(error) {
      console.log("promessa voltou com falha");
    });
  };

})();
