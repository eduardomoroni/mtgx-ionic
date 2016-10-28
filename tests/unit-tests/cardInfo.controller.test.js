describe('CardInfoCrawlCtrl', function() {

	var controller,
		  mockedService;

	//TODO: Load modules
  beforeEach(module('mtgx.controlers'));

	beforeEach(inject(function(_$rootScope_, $controller) {
		console.log("Before Each");
		$rootScope = _$rootScope_;

		//TODO: Mock service
		mockedService = {
			getCardInfo: jasmine.createSpy('cardInfo spy')
							.and.returnValue("anything")
		};

		//TODO: Instantiate a controller
		controller = $controller('CardInfoCrawlCtrl', {
						'RulingCrawlService': mockedService,
					  'CardInfoCrawlCtrl': $rootScope }
					 );

		controller = $rootScope;
	}));

	//TODO: Call controller with mocked service and get result
	it('should fetch a card', function() {
		console.log("should fetch a card");
		console.log("mocked service: "+mockedService);
		console.log(controller);
		console.log(controller.multiverseID = '1');
		console.log(controller.findCard());

		expect(mockedService.getCardInfo).toHaveBeenCalled();
	});

});
