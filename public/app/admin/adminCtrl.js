angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'currentUser', 'getPosts', function($scope, adminService, currentUser, getPosts) {

	var user = currentUser;

	$scope.modalShown = false;

  $scope.posts = getPosts.data;

	$scope.approvePost = function(postId, userId, bountyId) {
		adminService.approvePost(postId, userId, bountyId);
	};

	$scope.discardPost = function(id){
		adminService.discardPost(id);
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
