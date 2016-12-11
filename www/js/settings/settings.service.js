(function() {
  'use strict';

  angular.module('mtgx.settings')
         .service('SettingsService', ['SqliteService', 'InternalizationService',  SettingsService]);

  function SettingsService (SqliteService, InternalizationService) {

    return {
      loadUserSettings: loadUserSettings,
      getLanguage: getLanguage,
      setLanguage: setLanguage
    };

   function loadUserSettings(){
     setUpInternalization(this, InternalizationService);
    };

    function getLanguage() {
      return SqliteService.getItems("SELECT value FROM settings WHERE key = 'language';", [])
      .then(function(data) {
        return data;
      }, function functionName(err) {
        var TABLE_NOT_EXIST = 5;
        console.error(err.message);

        if (err.code == TABLE_NOT_EXIST){
          console.info("Setting up settings table");
          createSettingsTable(SqliteService);
        }
      });
    };

    function setLanguage(language) {
      SqliteService.executeSql("UPDATE settings SET value=? WHERE key = 'language';", [language])
      .then(function(){
        InternalizationService.setTranslation(language);
        return true;
      }, function(err){
        console.error(err);
        return false;
      });
    };

    function setUpInternalization(service, InternalizationService){
        service.getLanguage().then(function(data) {
          if (typeof data !== 'undefined'){
            InternalizationService.setTranslation(data.value);
          } else {
            InternalizationService.setTranslation("pt-br");
          }
        });
    }

    function createSettingsTable(SqliteService){
      var createSettingsTable = "CREATE TABLE IF NOT EXISTS settings (key text primary key, value text);"
      SqliteService.executeSql(createSettingsTable, []); //What if we get error on creating table?

      var insertTranslationKey = "INSERT INTO settings VALUES ('language','pt-br')";
      SqliteService.executeSql(insertTranslationKey, []);
    }
  }

})();
