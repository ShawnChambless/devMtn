angular.module('groupProject')
.controller('homeCtrl', ['$scope', 'homeService', 'getPosts', 'currentUser', '$stateParams', function($scope, homeService, getPosts, currentUser, $stateParams) {

	$scope.modalShown = false;

	$scope.admin = currentUser.isAdmin;

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

	$scope.addToviewLater = function(postId) {
		homeService.addToviewLater(postId);
	};

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;

		$scope.newPost = "";
	};

	$scope.deletePost = function(postId) {
		homeService.deletePost(postId);
	};

	var count = parseInt($stateParams.count, 10);
	if (count > 10) {
		$scope.prevPage = 'home({count:' + (count - 10) + '})';
		$scope.nextPage = 'home({count:' + (count + 10) + '})';
	} else {
		$scope.prevPage = 'home({count: 0})';
		$scope.nextPage = 'home({count:' + (count + 10) + '})';
	}

	$scope.flashMsg = function(){
	if(error){
		$scope.hideError = !$scope.hideError;
	}
	if(resp){
		$scope.hideSuccess = !$scope.hideSuccess;
	}
	};
}]);
