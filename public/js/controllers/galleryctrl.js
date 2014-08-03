

angular.module('galleryCtrl', [])
	.factory('galleryInfo', function() {
		/* list of gallery albums from FB */
		return {
			album_ids : [
			"710901378955123" /* Aaj Kaal culture show */
			] 
		};
	})
	.controller('galleryController', ['$scope', '$http', 'galleryInfo', 
		function($scope, $http, galleryInfo) {
			$scope.title	= "Gallery";
			$scope.subtitle = "";
			$scope.album_names = [];
			$scope.photos = [];

			for (i in galleryInfo.album_ids) {
				// get album names
				$http.get('/api/fb/album/id/' + galleryInfo.album_ids[i])
					.success(function(res) {
						$scope.album_names.push(res.name);
					})
					.error(function(res) {
						$scope.album_names.push("...");
					});

				// get photos from that album
				$http.get('/api/fb/album/photos/' + galleryInfo.album_ids[i])
					.success(function(res) {
						for (img in res.data) {
							$scope.photos.push({
								src		: res.data[img].source,
								small 	: res.data[img].picture, 
								album 	: $scope.album_names[i]
							});
						};
					})
					.error(function(res) {
						console.log("Error in retrieving photos : ", res);
					});
					console.log($scope);
			}
}]);
