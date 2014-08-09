angular.module('galleryCtrl', [])
	.factory('galleryInfo', function() {
		/* list of gallery albums from FB */
		return {
			album_ids : [
				"710901378955123", /* Aaj Kaal culture show */
			] 
		};
	})
	.factory('galleryCache', function($cacheFactory) {
		return $cacheFactory('galleryData');
	})
	.controller('galleryController', ['$scope', '$http', 'galleryInfo', 'galleryCache', 
		function($scope, $http, galleryInfo, galleryCache) {
			$scope.title	= "Gallery";
			$scope.subtitle = "";
			$scope.albums = {};
			$scope.photos = [];

			for (i in galleryInfo.album_ids) {
				// get album names
				$http.get('/api/fb/album/id/' + galleryInfo.album_ids[i], { cache: true })
					.success(function(res) {
						$scope.albums[galleryInfo.album_ids[i]] = { name : res.name, photos : [] };
					})
					.error(function(res) {
						$scope.albums[galleryInfo.album_ids[i]] = { name : "Some event...", photos : [] };
					});

				// get photos from that album
				$http.get('/api/fb/album/photos/' + galleryInfo.album_ids[i], { cache: galleryCache })
					.success(function(res) {
						for (img in res.data) {
							$scope.albums[galleryInfo.album_ids[i]].photos.push({
								src		: res.data[img].source,
								small 	: res.data[img].picture, 
								album 	: $scope.albums[galleryInfo.album_ids[i]]
							});
						};
						// $scope.photos = res.data;
					})
					.error(function(res) {
						console.log("Error in retrieving photos : ", res);
					});
			}
			

}]);
