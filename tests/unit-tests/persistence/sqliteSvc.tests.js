describe('Service Unit Tests', function(){
    var sqliteService, httpMock, rootScope;

    beforeEach(function(){
      module('mtgx.persistence');
    });

    beforeEach(inject(function ($httpBackend, $q, SqliteService, $rootScope) {
        httpMock = $httpBackend;
        rootScope = $rootScope;
        sqliteService = SqliteService;
    }));

    it('can get an instance of sqlite factory', inject(function(SqliteService) {
        expect(sqliteService).toBeDefined();
    }));

    it('FIGURE OUT HOW TO TEST NATIVE THINGS', inject(function(SqliteService) {
        expect(true).toBeDefined();
        //TODO: Figure out how to test it
    }));

});
