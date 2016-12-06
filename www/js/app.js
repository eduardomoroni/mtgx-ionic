angular.module('mtgx.infoGatherer', []);
angular.module('mtgx.cardSearch', []);
angular.module('mtgx', ['ionic', 'mtgx.infoGatherer', 'mtgx.cardSearch'])
.run(run)
.config(config);

function run($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}

function config($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //Force android tabs on bottom
}
