describe('CardInfoCrawlCtrl', function() {

	var controller,
		  mockedService;

  beforeEach(module('mtgx'));
	beforeEach(module('mtgx.services'));

	beforeEach(module(function($provide, $urlRouterProvider) {
    	$provide.value('$ionicTemplateCache', function(){} );
	    $urlRouterProvider.deferIntercept();
	}));

	beforeEach(inject(function($controller, $q) {
		deferredLogin = $q.defer();

		mockedService = {
			getCardInfo: jasmine.createSpy('cardInfo spy')
							.and.returnValue("deferredLogin.promise")
		};

		controller = $controller('CardInfoCrawlCtrl', {
						'RulingCrawlService': mockedService }
					 );
	}));

	describe('#fetchCardInformations', function() {

		beforeEach(inject(function(_$rootScope_) {
			$rootScope = _$rootScope_;
			controller.multiverseID = '1';
			controller.findCard();
		}));

		it('should fetch a card', function() {
			console.log("should fetch a card");
			console.log("mocked service: "+mockedService);
        expect(mockedService.getCardInfo).toHaveBeenCalled();
		});

	})
});
