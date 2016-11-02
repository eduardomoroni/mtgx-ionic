describe('Info Gatherer', function(){
    var controller, mockedService;

    beforeEach(module('mtgx.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        mockedService = {};

        controller = $controller('InfoGathererCtrl', {'InfoGathererService': mockedService});
    }));

    describe('#doSomething', function() {

    		beforeEach(inject(function(_$rootScope_) {
    			$rootScope = _$rootScope_;
    		}));

    		it('should foobar', function() {
          expect(controller.foo).toBe("bar");
    		});
      });

});
