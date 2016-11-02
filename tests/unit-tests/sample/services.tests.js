describe('Chats Unit Tests', function(){
    var Chats;
    beforeEach(module('mtgx.services'));

    beforeEach(inject(function (_Chats_) {
        Chats = _Chats_;
    }));

    it('can get an instance of my factory', inject(function(Chats) {
        expect(Chats).toBeDefined();
    }));

    it('has 5 chats', inject(function(Chats) {
        expect(Chats.all().length).toEqual(5);
    }));
    
    it('has Max as friend with id 1', inject(function(Chats) {
        var oneFriend = {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&amp;s=460'
        };

        expect(Chats.get(1).name).toEqual(oneFriend.name);
    }));
});
