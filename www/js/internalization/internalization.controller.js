(function() {
  'use strict';

  angular.module('mtgx.internalization')
         .controller('InternalizationCtrl', ['$translate', InternalizationCtrl]);

  function InternalizationCtrl ($translate){

      var vm = this;

      vm.languages = [
          {name : "Português", abbreviation : "pt-br"},
          {name : "English", abbreviation : "en"},
          {name : "Espanhol", abbreviation : "es"}
      ];

      vm.translation = $translate.use();

      vm.switchLanguage = function(language) {
        $translate.use(language);
      }
  }

})();
