(function() {
  'use strict';

  angular.module('mtgx.internalization')
         .controller('InternalizationCtrl', ['$translate', 'LocalStorageService', InternalizationCtrl]);

  function InternalizationCtrl ($translate, LocalStorageService){

      var vm = this;

      vm.languages = [
          {name : "Português", abbreviation : "pt-br"},
          {name : "English", abbreviation : "en"},
          {name : "Espanhol", abbreviation : "es"}
      ];

      vm.translation = $translate.use();

      vm.switchLanguage = function(language) {
        LocalStorageService.setLocalStorage("language", language);
        $translate.use(language);
      }
  }

})();
