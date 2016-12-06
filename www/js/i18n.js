(function() {
  'use strict';

  angular.module('mtgx').config(translate);

  function translate($translateProvider) {
      $translateProvider.translations('en', {
           menu_message: "Welcome",
           actual_language: "English",
           card_name: "Card Name"
       });

       $translateProvider.translations('pt-br', {
           menu_message: "Seja Bem Vindo",
           actual_language: "Português",
           card_name: "Nome da Carta"
       });

       $translateProvider.preferredLanguage("pt-br");
       $translateProvider.fallbackLanguage("en");
  }

})();
