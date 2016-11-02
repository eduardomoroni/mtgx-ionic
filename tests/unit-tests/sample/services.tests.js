describe('Chats Unit Tests', function(){
    var Chats;
    beforeEach(module('mtgx.services'));

    beforeEach(inject(function (_Chats_) {
        Chats = _Chats_;
    }));

    it('can get an instance of my factory', inject(function(Chats) {
        expect(Chats).toBeDefined();
    }));

    it('get true', inject(function(Chats) {
        expect(Chats.getCard()).toEqual(true);
    }));

});
