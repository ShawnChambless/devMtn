angular.module('groupProject')
.controller('homeCtrl', ['$scope', 'homeService', 'getPosts', function($scope, homeService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;
	
	$scope.upVoteDownVote = function(postId, updatedVote){
		homeService.upVoteDownVote(postId, updatedVote).success(function(updatedPost){
			var index;
			$scope.posts.map(function(item, i){
				if (item._id === updatedPost._id) index = i;
			});
			$scope.posts[index] = updatedPost;
		});
	};

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
