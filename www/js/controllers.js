angular.module('mtgx.controllers', [])

.controller('AppCtrl', AppCtrl)
.controller('GeoLocationCtrl', GeoLocationCtrl)
.controller('ImageCrawlCtrl', ImageCrawlCtrl)
//Sample Controllers
.controller('PlaylistsCtrl', PlaylistsCtrl)
.controller('PlaylistCtrl', function($scope) {})
.controller('ChatsCtrl', ChatsCtrl)
.controller('ChatDetailCtrl', ChatDetailCtrl)
.controller('AccountCtrl', AccountCtrl)
;

// ImageCrawlCtrl.JS, seria interessante mover este código para outro arquivo.
// Talvez manter esse controllers.js para juntar todos os controllers, e o app usar só o controllers.js (não se se é possivel)
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
// FIM ImageCrawlCtrl.JS

// GeoLocationCtrl
function GeoLocationCtrl ($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) 
{
     
    $ionicPlatform.ready(function() 
    {
      console.log("Iniciando busca.");
      $ionicLoading.show({
          template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });
       
      var posOptions = {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0
      };

      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
          console.log("Obtendo posição.");
          var lat  = position.coords.latitude;
          var long = position.coords.longitude;

          console.log(lat + "," + long );
           
          var myLatlng = new google.maps.LatLng(lat, long);
          
          var mapOptions = {
              center: myLatlng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };          
           
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
           
          $scope.map = map;   
          $ionicLoading.hide();           
           
      }, function(err) {
          $ionicLoading.hide();
          console.log(err);
      });
    })               
}
// FIM GeoLocationCtrl

// AppCtrl

function AppCtrl ($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}

// FIM AppCtrl

// Sample Controllers, esses controllers são só para ter um exemplo de como funciona,
// Ao final do projeto serão todas apagadas, só deixei aqui para evitar ter que ficar procurando na internet coisas simples
// e também para definirmos um padrão para seguir durante o projeto
function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

function ChatDetailCtrl($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}

function ChatsCtrl($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}

function PlaylistsCtrl($scope) {
  $scope.playlists = [
    { title: 'Red', id: 1 },
    { title: 'Blue', id: 2 },
    { title: 'Black', id: 3 },
    { title: 'White', id: 4 },
    { title: 'Green', id: 5 },
    { title: 'Colorless', id: 6 }
  ];
}
// FIM Sample Controllers