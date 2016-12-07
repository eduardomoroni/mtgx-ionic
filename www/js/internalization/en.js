(function() {
  'use strict';

  angular.module('mtgx').config(english);

  function english($translateProvider) {

       $translateProvider.translations('en', {
           LANGUAGE: "English",
           MENU_MESSAGE: "Welcome"
       });
  }

})();
