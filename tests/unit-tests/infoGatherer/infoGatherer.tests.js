describe('Controllers', function(){
    var scope, controller;

    // load the controller's module
    beforeEach(module('mtgx.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        serviceMock = {
          getCard: jasmine.createSpy('find spy')
                        .and.returnValue(true)
      };

        controller = $controller('InfoGathererCtrl', {
                'InfoGathererService': serviceMock }
             );
    }));

    it('foo bar', function(){
        expect(scope.foo).toEqual("bar");
    });
});
