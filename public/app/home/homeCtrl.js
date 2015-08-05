angular.module('groupProject')
.controller('homeCtrl', ['$scope', 'homeService', 'getPosts', function($scope, homeService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;
	
	$scope.addToFavorites = function(postId) {
		homeService.addToFavorites(postId);
	};

	$scope.addToWatchLater = function(postId) {
		homeService.addToWatchLater(postId);
	};

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;

		$scope.newPost = "";
	};
}]);
