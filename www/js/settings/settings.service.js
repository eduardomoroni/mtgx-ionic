(function() {
  'use strict';

  angular.module('mtgx.settings')
         .factory('SettingsService', ['SqliteService', 'InternalizationService',  SettingsService]);

  function SettingsService (SqliteService, InternalizationService) {
    return {
      setUpUserPreferences: function(){
        setUpInternalization(this, InternalizationService);
      },
      getLanguage: function() {
        return SqliteService.getItems("SELECT value FROM settings WHERE key = 'language';", [])
        .then(function(data) {
          return data;
        },
        function functionName(err) {
          console.log(err);
          return "";
        });

      },
      setLanguage: function(language) {
        SqliteService.executeSql("UPDATE settings SET value=? WHERE key = 'language';", [language])
        .then(function(){
          InternalizationService.setTranslation(language);
          return true;
        },
        function(err){
          console.log(err);
          return false;
        });
      }
    }

    function setUpInternalization(service, InternalizationService){
        service.getLanguage().then(function(data) {
          InternalizationService.setTranslation(data.value);
        }, function functionName(err) {
          InternalizationService.setTranslation("pt-br");
        });
    }
  }

})();
