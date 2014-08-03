

angular.module('galleryCtrl', [])
	.factory('galleryInfo', function() {
		/* list of gallery albums from FB */
		return {
			album_ids : [
				"710901378955123", /* Aaj Kaal culture show */
			] 
		};
	})
	.controller('galleryController', ['$scope', '$http', 'galleryInfo', 
		function($scope, $http, galleryInfo) {
			$scope.title	= "Gallery";
			$scope.subtitle = "";
			$scope.albums = {};
			$scope.photos = [];

			for (i in galleryInfo.album_ids) {
				// get album names
				$http.get('/api/fb/album/id/' + galleryInfo.album_ids[i])
					.success(function(res) {
						$scope.albums[galleryInfo.album_ids[i]] = res.name;
					})
					.error(function(res) {
						$scope.albums[galleryInfo.album_ids[i]] = "...";
					});

				// get photos from that album
				$http.get('/api/fb/album/photos/' + galleryInfo.album_ids[i])
					.success(function(res) {
						for (img in res.data) {
							$scope.photos[img] = {
								src		: res.data[img].source,
								small 	: res.data[img].picture, 
								album 	: $scope.albums[galleryInfo.album_ids[i]]
							};
						};
						// $scope.photos = res.data;
					})
					.error(function(res) {
						console.log("Error in retrieving photos : ", res);
					});
			}

}]);
