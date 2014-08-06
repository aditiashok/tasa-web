
angular.module('eboardCtrl', []).controller('eboardController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "E-board";
	$scope.subtitle = "Introducing the 2014-15 e-board...";
	$http.get('/api/eboard', { cache : true })
		.success(function(data) {
			$scope.eboard = data;
			console.log($scope.eboard);
		})
		.error(function(data) {
			console.log("* Error in retrieving TASA eboard info", data);
		});
}]);
