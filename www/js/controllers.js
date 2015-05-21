angular.module('controllers', [])

.controller('MyController', function($scope) {
	
	$scope.text = null;

	$scope.sayit = function(){
		console.log($scope.text);
	}
});

