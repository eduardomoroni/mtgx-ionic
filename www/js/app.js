angular.module('mtgx.infoGatherer', []);
angular.module('mtgx.cardSearch', []);
angular.module('mtgx.internalization', ['pascalprecht.translate']);
angular.module('mtgx', ['ionic', 'mtgx.infoGatherer', 'mtgx.cardSearch', 'mtgx.internalization'])
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

function config($ionicConfigProvider, $translateProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //Force android tabs on bottom
  $translateProvider.preferredLanguage("pt-br");
  $translateProvider.useSanitizeValueStrategy('escape');
}
