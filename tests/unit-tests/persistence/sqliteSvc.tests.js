describe('Service Unit Tests', function(){
    var sqliteService;

    beforeEach(function(){
      module('mtgx.persistence');
    });

    beforeEach(inject(function (SqliteService) {
        sqliteService = SqliteService;
    }));

    it('Can get an instance of sqlite factory', function() {
        expect(sqliteService).toBeDefined();
    });

    it('FIGURE OUT HOW TO TEST NATIVE STUFFS', function() {
        expect(true).toBeDefined();
    });

});
