(function() {
  'use strict';

  angular.module('mtgx').config(english);

  function english($translateProvider) {

       $translateProvider.translations('en', {
           language: "English",
           menu_message: "Welcome"
       });
  }

})();
