angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', 'contentLandingService', 'getPosts', function($scope, contentLandingService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;

	$scope.addToFavorites = function(userId, postId) {
		contentLandingService.addToFavorites(userId, postId);
	};

	$scope.addToWatchLater = function(userId, postId) {
		contentLandingService.addToWatchLater(userId, postId);
	};

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};
}]);
