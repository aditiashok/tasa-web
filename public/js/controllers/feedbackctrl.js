
angular.module('feedbackCtrl', []).controller('feedbackController', ['$scope', function($scope) {
	$scope.title = "Feedback";
	$scope.formPrompt = "How has your experience been with us?";
	$scope.submit = function(form) {
			

		  	alert("Thank you! We highly appreciate your feedback.");
		  	$scope.name = "";
		  	$scope.email = "";
		  	$scope.fdbk = "";
	};
}]);
