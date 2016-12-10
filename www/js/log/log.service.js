(function() {
    'use strict';

    angular
        .module('mtgx.log')
        .service('LogService', ['$log', LogService]);

    function LogService($log) {
      var _enabled = true;
      var _debug = true;

      this.enable = function(boolean){
        _enabled = boolean;
      };

      this.enableDebug = function(boolean){
        _debug = boolean;
      };

      this.log = function(message) {
        if (_enabled)
          $log.log(message);
      };

      this.info = function(message) {
        if (_enabled)
          $log.info(message);
      };

      this.warn = function(message) {
        if (_enabled)
          $log.warn(message);
      };

      this.debug = function(message) {
        if (_enabled && _debug)
          $log.debug(message);
      };

      this.error =  function(message) {
        $log.error(message);
      };

    }
})();
