angular.module('mtgx.persistence', ['ngCordova']);
angular.module('mtgx.infoGatherer', []);
angular.module('mtgx.cardSearch', []);
angular.module('mtgx.settings', ['mtgx.persistence', 'mtgx.internalization']);
angular.module('mtgx.login', []);
angular.module('mtgx.internalization', ['pascalprecht.translate']);
angular.module('mtgx', ['ionic', 'mtgx.login', 'mtgx.infoGatherer', 'mtgx.cardSearch', 'mtgx.settings'])
.run(run)
.config(config);

function run($ionicPlatform, PouchDBService, SettingsService) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    PouchDBService.initDB('mtgx', {adapter: 'websql'});
    SettingsService.loadUserSettings();
  });
}

function config($ionicConfigProvider, $translateProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //Force android tabs on bottom

  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.preferredLanguage("pt-br");
}
