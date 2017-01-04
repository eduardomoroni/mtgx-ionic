describe('PouchDB Service', function(){
    var pouchDBService;

    beforeEach(function(){
      module('mtgx.persistence');
    });

    beforeEach(inject(function (PouchDBService) {
        pouchDBService = PouchDBService;
    }));

    it('can get an instance of pouchDB factory', function() {
        expect(pouchDBService).toBeDefined();
    });

    it('FIGURE OUT HOW TO TEST NATIVE STUFFS', function() {
        expect(true).toBeDefined();
    });

});
