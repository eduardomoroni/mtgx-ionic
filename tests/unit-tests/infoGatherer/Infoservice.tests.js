describe('Service Unit Tests', function(){
    var infoService, httpMock, qMock;

    beforeEach(function(){
      module(function($provide){
        $provide.service('$http', function(){
          this.get= jasmine.createSpy('http.get').and.returnValue(true);
        });
        $provide.service('$q', function(){
          this.reject = jasmine.createSpy('q.reject');
        });

      });
      module('mtgx.services');
    });

    beforeEach(inject(function ($http, $q, InfoGathererService) {
        httpMock = $http;
        qMock = $q;
        infoService = InfoGathererService;
    }));

    it('can get an instance of my factory', inject(function(InfoGathererService) {
        expect(infoService).toBeDefined();
    }));

    it('foo bar', inject(function(InfoGathererService) {
      expect(infoService.foobar()).toEqual(true);
    }));

    it('should call the api', function(){
      infoService.getCard("1");

      expect(httpMock.get).toHaveBeenCalled();
    });

});
