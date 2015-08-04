angular.module('groupProject')
.controller('homeCtrl', ['$scope', 'homeService', 'getPosts', function($scope, homeService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;

	$scope.addToFavorites = function(userId, postId) {
		homeService.addToFavorites(userId, postId);
	};

	$scope.addToWatchLater = function(userId, postId) {
		homeService.addToWatchLater(userId, postId);
	};

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};
}]);
