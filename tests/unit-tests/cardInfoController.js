describe('CardInfoCrawlCtrl', function() {

	var controller,
		  mockedService;

  beforeEach(module('mtgx'));

	beforeEach(module(function($provide, $urlRouterProvider) {
    	$provide.value('$ionicTemplateCache', function(){} );
	    $urlRouterProvider.deferIntercept();
	}));

	beforeEach(inject(function($controller, $rootScope, $http, RulingCrawlService) {
    mocekdService = RulingCrawlService
    controller = $controller('CardInfoCrawlCtrl', {
        '$scope': $rootScope.$new(),
        '$http': $http,
        'RulingCrawlService': RulingCrawlService }
       );
  }));

	describe('#fetchCardInformations', function() {

		beforeEach(inject(function(_$rootScope_) {
			$rootScope = _$rootScope_;
			controller.multiverseInput = '1';
			controller.fetchCardInformations('1');
		}));

		it('should fetch a card', function() {
        expect(mockedService.getRulings).toHaveBeenCalled();
		});

	})
});
