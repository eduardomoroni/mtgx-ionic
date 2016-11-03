describe('Info Gatherer', function(){
    var vm, mockedService;

    //beforeEach(module('mtgx.controllers'));

    beforeEach(function(){
    module(function($provide){
      $provide.service('InfoGathererService', function(){
        this.getCard= jasmine.createSpy('getCard');
      });
    });

    module('mtgx.controllers');
  });

    beforeEach(inject(function($rootScope, $controller, InfoGathererService) {
        mockedService = InfoGathererService;
        vm = $controller('InfoGathererCtrl', {'InfoGathererService': mockedService});
    }));

    it('should foobar', function() {
      console.log(vm);
      console.log(mockedService);
      expect(vm.foo).toBe("bar");
    });

});
