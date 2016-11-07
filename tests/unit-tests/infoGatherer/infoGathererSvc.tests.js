describe('Service Unit Tests', function(){
    var infoService, httpMock, qMock, rootScope;

    beforeEach(function(){
      module('mtgx.services');
    });

    beforeEach(inject(function ($httpBackend, $q, InfoGathererService, $rootScope) {
        httpMock = $httpBackend;
        rootScope = $rootScope;
        infoService = InfoGathererService;
    }));

    it('can get an instance of my factory', inject(function(InfoGathererService) {
        expect(infoService).toBeDefined();
    }));

    // it('foo bar', inject(function(InfoGathererService) {
    //   var result;
    //   httpMock.expectGET(/v1\/cards\//).respond(200, {name:'bla'});
    //
    //   infoService.getCard('1').then(function(serverResponse) {
    //     result = serverResponse;
    //     console.log('kakaka'+serverResponse)
    //   });
    //
    //   httpMock.flush();
    //   rootScope.$apply();
    //   expect(result).toEqual({name:'bla'});
    // }));

});
