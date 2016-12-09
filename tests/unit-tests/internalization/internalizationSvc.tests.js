describe('Internalization Service', function(){

    describe('With a preferred language', function() {

      beforeEach(module('pascalprecht.translate', function ($translateProvider) {
        $translateProvider.preferredLanguage('pt-br');
      }));

      it('Testing $translate', inject(function($translate) {
        expect($translate.use()).toEqual('pt-br');
      }));

      describe('Testing InternalizationCtrl', function() {
        var $q, $rootScope, $translate, service;

        beforeEach(module('mtgx.internalization'));

        beforeEach(function(){
          inject(function($controller, _$q_, _$rootScope_, _$translate_, InternalizationService) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            $translate = _$translate_;
            service = InternalizationService;
          });

        });

        it('Should provide translations available', function() {
          var expectedTranslations = [
              {name : "Português", abbreviation : "pt-br"},
              {name : "English", abbreviation : "en"},
              {name : "Espanhol", abbreviation : "es"}
          ];

          expect(service.translationsAvailable()).toEqual(expectedTranslations);
        });

        it('Should change current translation', function() {
          $translate.use("pt-br");
          service.setTranslation("en");
          expect($translate.use()).toEqual("en")
        });

        it('Should get current translation', function() {
          $translate.use("es");
          expect(service.getTranslation()).toEqual("es");
        });

      });
    });

});
