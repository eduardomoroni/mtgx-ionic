angular.module('mtgx.controllers').controller('GeoLocationCtrl', GeoLocationCtrl);

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