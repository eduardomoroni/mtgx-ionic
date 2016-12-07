angular.module('mtgx.infoGatherer', []);
angular.module('mtgx.cardSearch', []);
angular.module('mtgx.settings', []);
angular.module('mtgx.persistence', []);
angular.module('mtgx.internalization', ['pascalprecht.translate', 'mtgx.persistence']);
angular.module('mtgx', ['ionic', 'mtgx.infoGatherer', 'mtgx.cardSearch', 'mtgx.internalization', 'mtgx.settings', 'mtgx.persistence'])
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
  $translateProvider.useSanitizeValueStrategy('escape');

  var currentLanguage = window.localStorage.getItem("language");
  if (currentLanguage instanceof String){
    $translateProvider.preferredLanguage(currentLanguage);
  } else {
    $translateProvider.preferredLanguage("pt-br");
  }

}
