describe("Log service", function () {
  var logService, $log;

  beforeEach(function () {
    module('mtgx.log');

    inject(function(LogService, _$log_) {
      $log = _$log_;
      logService = LogService;
    });

  });

  it("Should log as the $log does", function () {
      logService.enable(true);

      logService.log("log");
      expect($log.log.logs).toContain(['log']);

      logService.debug("debug");
      expect($log.debug.logs).toContain(['debug']);

      logService.info("info");
      expect($log.info.logs).toContain(['info']);

      logService.warn("warn");
      expect($log.warn.logs).toContain(['warn']);

      logService.error("error");
      expect($log.error.logs).toContain(['error']);
  });

  it("Should turn all logs off but error", function () {
    logService.enable(false);
    logService.enableDebug(false);

    logService.log("log");
    expect($log.log.logs).toEqual([]);

    logService.debug("debug");
    expect($log.debug.logs).toEqual([]);

    logService.info("info");
    expect($log.info.logs).toEqual([]);

    logService.warn("warn");
    expect($log.warn.logs).toEqual([]);

    logService.error("error");
    expect($log.error.logs).toContain(['error']);
  });

  it("Should turn off debug logs", function () {
    logService.enableDebug(false);
    logService.debug("debug");
    expect($log.debug.logs).toEqual([]);

    logService.enableDebug(true);
    logService.debug("debug");
    expect($log.debug.logs).toContain(['debug']);
  });

});
