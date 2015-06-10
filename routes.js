var RoutingApp = angular.module('RoutingApp', ['ngRoute', 'ngAnimate']);
	RoutingApp.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'Templates/about.php'
			})
			.when('/experience', {
				templateUrl: 'Templates/experience.html'
			})			
			.when('/education', {
				templateUrl: 'Templates/education.html'
			})
			.when('/projects', {
				templateUrl: 'Templates/projects.html'
			})
			.when('/contact', {
				templateUrl: 'Templates/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		}]);