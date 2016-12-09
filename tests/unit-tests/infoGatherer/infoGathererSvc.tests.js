describe('InfoGatherer Service', function(){
    var infoService, httpMock, rootScope;

    beforeEach(function(){
      module('mtgx.infoGatherer');
    });

    beforeEach(inject(function ($httpBackend, InfoGathererService, $rootScope) {
        httpMock = $httpBackend;
        rootScope = $rootScope;
        infoService = InfoGathererService;
    }));

    it('can get an instance of my factory', function() {
        expect(infoService).toBeDefined();
    });

    it('should hit gatherling API', function() {
      httpMock.expectGET(/v1\/cards\//).respond(200);
      infoService.getCard('1');
    });
});
