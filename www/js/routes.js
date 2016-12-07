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

      .state('cardSearch', {
        url: '/cardSearch',
        abstract: true,
        templateUrl: 'templates/layouts/sidemenuAndTabs.html',
        controller: function($scope) { //Pode ficar mais elegante usando resolve
          $scope.tabsURL = 'templates/cardSearch/cardSearchTabs.html';
        }
      })

      .state('cardSearch.advancedSearch', {
        url: '/advancedSearch',
        views: {
          'cardSearch-advanced': {
            templateUrl: 'templates/cardSearch/advancedSearchTab.html',
            controller: 'SimpleCardSearchCtrl'
          }
        }
      })

      .state('cardSearch.simpleSearch', {
        url: '/simpleSearch',
        views: {
          'cardSearch-simple': {
            templateUrl: 'templates/cardSearch/simpleSearchTab.html',
            controller: 'AdvancedCardSearchCtrl'
          }
        }
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
