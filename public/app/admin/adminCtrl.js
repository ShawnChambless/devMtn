angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'currentUser', 'getPosts', function($scope, adminService, currentUser, getPosts) {

	var user = currentUser;

	$scope.modalShown = false;

  $scope.posts = getPosts.data;

	$scope.approvePost = function(postId, userId, bountyId, index) {
		adminService.approvePost(postId, userId, bountyId);
			$scope.posts.splice(index, 1);
	};

	$scope.discardPost = function(id, index){
		adminService.discardPost(id).then(function() {
			$scope.posts.splice(index, 1);
		});
	};

	$scope.editPost = function(id){
		adminService.editPost(id);
	};

	$scope.clearIt = function(){
		console.log($scope.show);
	};

	// $scope.postBounty = function(bounty){
	// 	adminService.postBounty(bounty);
	// };

}]);
