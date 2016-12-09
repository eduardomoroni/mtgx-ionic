describe('Info Gatherer Controller', function(){
    var vm, mockedService, $q, $rootScope;

    beforeEach(module('mtgx.infoGatherer'));

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

    it('should find a card', function() {
      vm.findCard('1');
      $rootScope.$apply();
      expect(vm.ObjCard.name).toBe("name");
      expect(vm.ObjCard.rulings).toBe("rulings");
      expect(vm.ObjCard.imgURL).toBe("imgURL");
    });

});
