(function() {
  'use strict';

  angular.module('mtgx').config(portugues);

  function portugues($translateProvider) {

       $translateProvider.translations('pt-br', {
         language: "Português",
         menu_message: "Seja Bem Vindo"
       });
  }

})();
