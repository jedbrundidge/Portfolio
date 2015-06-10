var RoutingApp = angular.module('RoutingApp', ['ngRoute', 'ngAnimate']);
	RoutingApp.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'Templates/about.php'
			})
			.when('/experience', {
				templateUrl: 'Templates/experience.php'
			})			
			.when('/education', {
				templateUrl: 'Templates/education.php'
			})
			.when('/projects', {
				templateUrl: 'Templates/projects.php'
			})
			.when('/contact', {
				templateUrl: 'Templates/contact.php'
			})
			.otherwise({
				redirectTo: '/'
			});
		}]);
		
		
		