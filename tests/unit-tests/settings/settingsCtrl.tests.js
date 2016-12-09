describe('Settings Controller', function(){
  var $scope, vm, settingsServiceMock, internalizationServiceMock;
  var fakeLanguages = [{name : "Português", abbreviation : "pt-br"}];

  beforeEach(function(){
    module('mtgx.settings');

    inject(function($controller, SettingsService , InternalizationService, _$rootScope_) {
      $scope = _$rootScope_.$new()
      settingsServiceMock = SettingsService;

      internalizationServiceMock = InternalizationService;
      spyOn(internalizationServiceMock, 'translationsAvailable')
                  .and.returnValue(fakeLanguages);//Should be mocked at controller instantiation's time

      vm = $controller('SettingsCtrl', {'$scope': $scope,
            'SettingsService': settingsServiceMock, 'InternalizationService': internalizationServiceMock});
    });
});

  it('Should expose available translations', function() {
    expect(vm.languages).toEqual(fakeLanguages);
  });

  it("Should change language", function () {
    spyOn(settingsServiceMock, 'setLanguage');
    vm.changeLanguage("es");
    expect(settingsServiceMock.setLanguage).toHaveBeenCalledWith('es');
  });

  it('Should watch InternalizationService current language', function() {
    getTranslationSpy = spyOn(internalizationServiceMock, 'getTranslation');

    getTranslationSpy.and.returnValue("es")
    internalizationServiceMock.getTranslation();
    $scope.$digest();
    expect(vm.language).toBe("es");

    getTranslationSpy.and.returnValue("en")
    internalizationServiceMock.getTranslation();
    $scope.$digest();
    expect(vm.language).toBe("en");
  });

});
