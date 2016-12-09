describe('LocalStorage Service', function(){
  var service;

  beforeEach(function () {
    module('mtgx.persistence');

    inject(function (LocalStorageService) {
      service = LocalStorageService;
    });
  });

  it("Should store a key-value on the LocalStorage", function () {
    service.setItem("Set","Value");
    expect(window.localStorage.getItem("Set")).toBe("Value");
  });

  it("Should retrieve a value from LocalStorage", function () {
    window.localStorage.setItem("Get", "AnotherValue");
    expect(service.getItem("Get")).toBe("AnotherValue");
  });
});
