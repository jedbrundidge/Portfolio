var portfolio = angular.module('Portfolio', [ngRoute]);

portfolio.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/about',{
		templateUrl: 'aboutme.html'
	});
});