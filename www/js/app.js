angular.module('mtgx.controllers', []);
angular.module('mtgx.infoGatherer', []).value('enabled',true);
angular.module('mtgx', ['ionic', 'mtgx.controllers', 'mtgx.infoGatherer'])
.run(run)
.config(config)
.controller('AppCtrl', AppCtrl)
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

function AppCtrl($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}

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
