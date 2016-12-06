(function() {
  'use strict';

  angular.module('mtgx').config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/infoGatherer');

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

})();
