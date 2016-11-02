angular.module('mtgx.controllers', []);
angular.module('mtgx.services', []);
angular.module('mtgx', ['ionic', 'mtgx.controllers', 'mtgx.services'])
.run(run)
.config(config)
.config(routes);

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

function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider  .otherwise('/app/infoGatherer');

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/layouts/sidemenu.html',
      controller: 'AppCtrl'
    })

    .state('app.infoGatherer', {
      url: '/infoGatherer',
      views: {
        'menuContent': {
          templateUrl: 'templates/infoGatherer.html',
          controller: 'InfoGathererCtrl'
        }
      }
    });

}
