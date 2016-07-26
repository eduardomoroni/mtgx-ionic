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

    .state('tab', {
      url: '/tab',
      abstract: true,
      controller: 'AppCtrl',
      templateUrl: 'templates/layouts/sidemenu-and-tabs.html'
    })

    .state('app.blankpage', {
        url: '/blankpage',
        views: {
          'menuContent': {
            templateUrl: 'templates/blankpage.html'
          }
        }
      })

      .state('app.cardinfocrawl', {
        url: '/cardinfocrawl',
        views: {
          'menuContent': {
            templateUrl: 'templates/cardinfocrawl.html',
            controller: 'CardInfoCrawlCtrl'
          }
        }
      })

      .state('app.geolocation', {
        url: '/geolocation',
        views: {
          'menuContent': {
            templateUrl: 'templates/geolocation.html',
            controller: 'GeoLocationCtrl'
          }
        }
      })

      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })
      .state('app.concreteTab', {
        url: '/contreteTab',
        views: {
          'menuContent': {
            templateUrl: 'templates/concrete-tabs/tab-main.html'
          }
        }
      })
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

    // Each tab has its own nav history stack:
    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/abstract-tabs/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      // Each tab has its own nav history stack:
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
     // Each tab has its own nav history stack:
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/abstract-tabs/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });
  }

})();