angular.module('mtgx.persistence', ['ngCordova']);
angular.module('mtgx.infoGatherer', []);
angular.module('mtgx.cardSearch', []);
angular.module('mtgx.settings', ['mtgx.persistence']);
angular.module('mtgx.login', []);
angular.module('mtgx.internalization', ['pascalprecht.translate', 'mtgx.persistence']);
angular.module('mtgx', ['ionic', 'mtgx.login', 'mtgx.infoGatherer', 'mtgx.cardSearch', 'mtgx.internalization', 'mtgx.settings'])
.run(run)
.config(config);

function run($ionicPlatform, SqliteService, PouchDBService) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    PouchDBService.initDB('mtgx', {adapter: 'websql'});
    SqliteService.initDB({ name: "mtgx.sqlite", location: 2, createFromLocation: 2 });
  });
}

function config($ionicConfigProvider, $translateProvider, $compileProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //Force android tabs on bottom
  $translateProvider.useSanitizeValueStrategy('escape');

  var currentLanguage = window.localStorage.getItem("language");
  if (currentLanguage instanceof String){
    $translateProvider.preferredLanguage(currentLanguage);
  } else {
    $translateProvider.preferredLanguage("pt-br");
  }

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content|ms-appx|x-wmapp0):|data:image\/|img\//);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
  $ionicConfigProvider.scrolling.jsScrolling(ionic.Platform.isIOS());

}
