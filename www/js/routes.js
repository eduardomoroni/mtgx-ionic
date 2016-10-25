(function() {
    'use strict';

  angular.module('mtgx').config(routes);

  function routes($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $urlRouterProvider.otherwise('/app/cardinfocrawl');

    $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/layouts/sidemenu.html',
      controller: 'AppCtrl'
    })

      .state('app.cardinfocrawl', {
        url: '/cardinfocrawl',
        views: {
          'menuContent': {
            templateUrl: 'templates/cardinfocrawl.html',
            controller: 'CardInfoCrawlCtrl'
          }
        }
      });
  }

})();
