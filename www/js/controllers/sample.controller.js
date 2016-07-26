angular.module('mtgx.controllers')
  .controller('PlaylistsCtrl', PlaylistsCtrl)
  .controller('PlaylistCtrl', function($scope) {})
  .controller('ChatsCtrl', ChatsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', AccountCtrl)
  ;

function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

function ChatDetailCtrl($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}

function ChatsCtrl($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}

function PlaylistsCtrl($scope) {
  $scope.playlists = [
    { title: 'Red', id: 1 },
    { title: 'Blue', id: 2 },
    { title: 'Black', id: 3 },
    { title: 'White', id: 4 },
    { title: 'Green', id: 5 },
    { title: 'Colorless', id: 6 }
  ];
}