angular.module('groupProject')
.controller('homeCtrl', ['$scope', 'homeService', 'getPosts', 'currentUser', '$stateParams', '$state', function($scope, homeService, getPosts, currentUser, $stateParams, $state) {

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
		homeService.addToFavorites(postId, currentUser._id);
	};

	$scope.addToviewLater = function(postId) {
		homeService.addToviewLater(postId, currentUser._id);
	};

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;

		$scope.newPost = "";
	};

	$scope.deletePost = function(postId, index) {
		homeService.deletePost(postId).then(function() {
			$scope.posts.splice(index, 1);
		});
	};

	$scope.tagView = function(cat, tag){
		$state.go('tag', {cat: cat, tag: tag});
	};

	var limit = 20;
	var count = parseInt($stateParams.count, 10);
	if (count > limit) {
		$scope.prevPage = 'home({count:' + (count - limit) + '})';
		$scope.nextPage = 'home({count:' + (count + limit) + '})';
	} else {
		$scope.prevPage = 'home({count: 0})';
		$scope.nextPage = 'home({count:' + (count + limit) + '})';
	}
}]);
