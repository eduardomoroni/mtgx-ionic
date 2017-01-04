(function() {
  'use strict';

  angular.module('mtgx.settings')
         .controller('SettingsCtrl', ['SettingsService', 'InternalizationService', '$scope', SettingsCtrl]);

  function SettingsCtrl (SettingsService, InternalizationService, $scope){
      var vm = this;

      vm.languages = InternalizationService.translationsAvailable();

      $scope.$watch(function() { return InternalizationService.getTranslation(); }, function(language) {
        vm.language = language;
      }, true);

      vm.changeLanguage = function (language) {
        SettingsService.setLanguage(language);
      }
  }

})();
