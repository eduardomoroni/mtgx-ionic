(function() {
  'use strict';

  angular.module('mtgx').config(espanhol);

  function espanhol($translateProvider) {

       $translateProvider.translations('es', {
           LANGUAGE: "Espanhol",
           MENU_MESSAGE: "BienVenido"
       });
  }

})();
