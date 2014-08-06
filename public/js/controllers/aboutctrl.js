

angular.module('aboutCtrl', []).controller('aboutController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "About TASA";
	$scope.description = "The Tufts Association of South Asians (TASA) is an organization dedicated to the celebration of South Asian cultures and peoples. Open to all Tufts students, the group organizes events to celebrate South Asian culture and promote discussion on issues that affect South Asia. Collectively, we strive to provide a platform to foster an appreciation for this multifaceted region of the world.";
	$http.get('/api/groups', { cache : true })
		.success(function(data) {
			$scope.groups = data;
		})
		.error(function(data) {
			console.log("* Error in retrieving TASA group info", data);
		});
}]);
