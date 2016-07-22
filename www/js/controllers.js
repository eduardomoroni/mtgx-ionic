angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
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
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Red', id: 1 },
    { title: 'Blue', id: 2 },
    { title: 'Black', id: 3 },
    { title: 'White', id: 4 },
    { title: 'Green', id: 5 },
    { title: 'Colorless', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope) {
})

.controller('GeoLocationCtrl', function ($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) 
{
     
    $ionicPlatform.ready(function() 
    {
      console.log("Iniciando busca.");
      $ionicLoading.show({
          template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });
       
      //var posOptions = {
      //    enableHighAccuracy: true,
      //    timeout: 20000,
      //    maximumAge: 0
      //};

      var posOptions = {
          enableHighAccuracy: false,
          timeout: 500000,
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
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ImageCrawlCtrl', function($scope, $http) {
  $scope.$watch('multiverseInput', function() {
    if ($scope.multiverseInput == undefined || $scope.multiverseInput == "")
      multiverseId = 413041;
    else 
      multiverseId = $scope.multiverseInput;

    $scope.viewTitle = "Crawling card #"+multiverseId;
    $scope.imgURL = getImgURLByMultiverseId(multiverseId);
    
    //$scope.rulings = getRulingsFromAPIbyId(multiverseId,$http);
    apiURL = "https://api.magicthegathering.io/v1/cards/";
    $http.get(apiURL+multiverseId)
    .success(function(data) {
        console.log(data.card.rulings);
        $scope.rulings = data.card.rulings;
    })
    .error(function(data) {
        console.log("Failed to retrieve data from "+apiURL+multiverseId);
        $scope.rulings = "";
    });
  });
})
;

function getImgURLByMultiverseId(multiverseId){
  baseImgURL = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=";
  return baseImgURL + multiverseId;
}

//Essa função faz uma assync call, só que ao receber resposta já saiu da $watch
//E não atualiza a view, uma opção é receber o $scope como parametro. Mas isso é feio.
function getRulingsFromAPIbyId(multiverseId, $http){
  apiURL = "https://api.magicthegathering.io/v1/cards/";

  $http.get(apiURL+multiverseId)
  .success(function(data) {
      console.log(data.card.rulings);
      return data.card.rulings;
  })
  .error(function(data) {
      console.log("Failed to retrieve data from "+apiURL+multiverseId);
      return "";
  });
}
