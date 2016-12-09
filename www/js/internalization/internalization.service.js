(function() {
  'use strict';

  angular.module('mtgx.internalization')
         .factory('InternalizationService', ['$translate', InternalizationService]);

  function InternalizationService ($translate) {
    return {
      translationsAvailable: function(multiverseId) {
        return [
            {name : "Português", abbreviation : "pt-br"},
            {name : "English", abbreviation : "en"},
            {name : "Espanhol", abbreviation : "es"}
        ];
      },
      setTranslation: function (language) {
          $translate.use(language);
      },
      getTranslation: function () {
          return $translate.use();
      }
    }
  }

})();
