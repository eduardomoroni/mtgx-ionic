describe('Service Unit Tests', function(){
    var infoService, httpMock, rootScope;

    beforeEach(function(){
      module('mtgx.infoGatherer');
    });

    beforeEach(inject(function ($httpBackend, $q, InfoGathererService, $rootScope) {
        httpMock = $httpBackend;
        rootScope = $rootScope;
        infoService = InfoGathererService;
    }));

    it('can get an instance of my factory', inject(function(InfoGathererService) {
        expect(infoService).toBeDefined();
    }));

    it('should hit gatherling API', inject(function(InfoGathererService) {
      httpMock.expectGET(/v1\/cards\//).respond(200);
      infoService.getCard('1');
    }));

    it('Should set module to Enable false', function () {
      expect(infoService.isEnabled()).toBe(true);
    });

});
