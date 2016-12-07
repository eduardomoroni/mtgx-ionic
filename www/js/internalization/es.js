(function() {
  'use strict';

  angular.module('mtgx').config(espanhol);

  function espanhol($translateProvider) {

       $translateProvider.translations('es', {
           language: "Espanhol",
           menu_message: "Bien Venido"
       });
  }

})();
