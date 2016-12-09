// describe('Internalization', function(){
//
//     describe('With a preferred language', function() {
//
//       beforeEach(module('pascalprecht.translate', function ($translateProvider) {
//         $translateProvider.preferredLanguage('pt-br');
//       }));
//
//       it('should use preferredLanguage', inject(function($translate) {
//         expect($translate.use()).toEqual('pt-br');
//       }));
//
//       describe('Testing InternalizationCtrl', function() {
//         var $q, $rootScope, mockedTranslate, vm;
//
//         beforeEach(module('mtgx.internalization'));
//
//         beforeEach(function(){
//           inject(function($controller, _$q_, _$rootScope_, _$translate_) {
//             $q = _$q_;
//             $rootScope = _$rootScope_;
//             mockedTranslate = _$translate_;
//             vm = $controller('InternalizationCtrl', {'$translate': mockedTranslate});
//           });
//
//           spyOn(mockedTranslate, 'use').and.callThrough();
//         });
//
//         it('Controller should change language', inject(function() {
//           vm.switchLanguage('pt-br');
//           expect(vm.translation).toEqual('pt-br');
//           expect(mockedTranslate.use).toHaveBeenCalledWith('pt-br');
//
//           vm.switchLanguage('en');
//           expect(mockedTranslate.use).toHaveBeenCalledWith('en');
//           expect(mockedTranslate.use()).toEqual('en');
//         }));
//
//       });
//     });
//
// });
