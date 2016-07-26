angular.module('mtgx.controllers').controller('ImageCrawlCtrl', ImageCrawlCtrl);

ImageCrawlCtrl.$inject = ['$scope', '$http'];
function ImageCrawlCtrl ($scope, $http){

  $scope.fetchCardInformations = function (multiverseInput){
    if ($scope.multiverseInput == undefined || $scope.multiverseInput == "")
      multiverseId = 386616;
    else
      multiverseId = $scope.multiverseInput;

    $scope.viewTitle = "Crawling card #"+multiverseId;
    $scope.imgURL = getImgURLByMultiverseId(multiverseId);
    //$scope.rulings = getRulingsFromAPIbyId(multiverseId,$http);

    var makePromise = function() {
      ImageCrawl.getRulings()
        .then(function(data) {
            alert("Promessa Cumprida");
        }, function(error) {
            alert("erro promesa");
        });
    };
  };
}

function getImgURLByMultiverseId(multiverseId){
  baseImgURL = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=";
  return baseImgURL + multiverseId;
}

//Essa função faz uma assync call, só que ao receber resposta já saiu da $watch
//E não atualiza a view, uma opção é receber o $scope como parametro. Mas isso é feio.
function getRulingsFromAPIbyId(multiverseId, http){
  apiURL = "https://api.magicthegathering.io/v1/cards/";

  http.get(apiURL+multiverseId)
  .success(function(data) {
      console.log("Ruling #"+multiverseId+" retrieve success!")
      console.log(data.card.rulings);
      return data.card.rulings;
  })
  .error(function(data) {
      console.log("Failed to retrieve data from "+apiURL+multiverseId);
      return "";
  });
}