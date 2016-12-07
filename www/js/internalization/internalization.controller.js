(function() {
  'use strict';

  angular.module('mtgx.internalization')
         .controller('InternalizationCtrl', ['$translate', 'PersistenceService', InternalizationCtrl]);

  function InternalizationCtrl ($translate, PersistenceService){

      var vm = this;

      vm.languages = [
          {name : "Português", abbreviation : "pt-br"},
          {name : "English", abbreviation : "en"},
          {name : "Espanhol", abbreviation : "es"}
      ];

      vm.translation = $translate.use();

      vm.switchLanguage = function(language) {
        PersistenceService.setLocalStorage("language", language);
        $translate.use(language);
      }
  }

})();
