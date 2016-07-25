angular.module('mtgx', ['ionic', 'ngCordova', 'mtgx.controllers', 'mtgx.factories'])
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

  function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //Force android tabs on bottom

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

    .state('app.imagecrawl', {
      url: '/imagecrawl',
      views: {
        'menuContent': {
          templateUrl: 'templates/imagecrawl.html',
          controller: 'ImageCrawlCtrl'
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

  $urlRouterProvider.otherwise('/app/imagecrawl');
}
