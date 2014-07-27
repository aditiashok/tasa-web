
angular.module('feedbackCtrl', []).controller('feedbackController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "Feedback";
	$scope.formData = {};
	$scope.formData.prompt =  "How has your experience been with us?";
	$scope.submit = function() {
		$http.post('/api/feedback', $scope.formData)
			.success(function(data, status, headers, config){
					console.log(headers);
				  	alert("Thank you! We highly appreciate your feedback.");
				  	$scope.formData.name = "";
				  	$scope.formData.email = "";
				  	$scope.formData.fdbk = "";
	  		})
	  		.error(function(data, status, headers, config){
					alert("Oops! An error occurred. Try again later?");
	  		});
	};
}]);
