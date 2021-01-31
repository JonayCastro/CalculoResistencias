var color;

angular.module('App', ['ngRoute'])
	.config(['$routeProvider', function(r){
		r
		.when('/',{
			controller:'FourBandsController',
			templateUrl: 'templates/fourbands.html'
		})
		.when('/five',{
			controller:'FiveBandsController',
			templateUrl:'templates/fivebands.html'
		})
		.otherwise('/');
	}]);