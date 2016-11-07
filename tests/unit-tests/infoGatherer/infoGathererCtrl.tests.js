describe('Info Gatherer', function(){
    var vm, mockedService, $q, $rootScope;

    beforeEach(function () {
      module('mtgx.services');
      module('mtgx.controllers');
    });

    beforeEach(function(){
      inject(function($controller, InfoGathererService, _$q_, _$rootScope_) {
        mockedService = InfoGathererService;
        $q = _$q_;
        $rootScope = _$rootScope_;
        vm = $controller('InfoGathererCtrl', {'InfoGathererService': mockedService});
      });

      sampleResponse = {name:'name', imageUrl:'imgURL', rulings:'rulings'};
      spyOn(mockedService, 'getCard')
        .and.returnValue($q.when(sampleResponse));
    });

    it('should foobar', function() {
      vm.findCard('1');
      $rootScope.$apply();
      expect(vm.ObjCard.name).toBe("name");
      expect(vm.ObjCard.rulings).toBe("rulings");
      expect(vm.ObjCard.imgURL).toBe("imgURL");

    });

});
