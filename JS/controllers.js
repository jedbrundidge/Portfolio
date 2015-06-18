var RoutingApp = angular.module('RoutingApp', []);
	RoutingApp.controller('aboutCtrl', ['$scope', '$http', function($scope, $http){
		$getData = $http.get('PHP/controllers.js')
			.success(function(response) {$scope.
	}]);