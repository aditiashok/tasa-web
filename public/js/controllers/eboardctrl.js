
angular.module('eboardCtrl', []).controller('eboardController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "E-board";
	$scope.year = "2014-15";
	$http.get('/api/eboard', { cache : true })
		.success(function(data) {
			$scope.eboard = data;
			for (i in $scope.eboard) {
				console.log($scope.eboard[i]);
				if ($scope.eboard[i]["listorder"] >= 0) {
					/* if specified listorder in data, resort array */
					console.log($scope.eboard[i]["listorder"]);
					var shift = $scope.eboard[i];
					$scope.eboard.splice(i, 1);
					$scope.eboard.splice(shift["listorder"], 0, shift);
				}
			};

			console.log($scope.eboard);
		})
		.error(function(data) {
			console.log("* Error in retrieving TASA eboard info", data);
		});
}]);
