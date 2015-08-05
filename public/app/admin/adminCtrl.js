angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'currentUser', 'getPosts', function($scope, adminService, currentUser, getPosts) {

	$scope.modalShown = false;
  // $scope.toggleModal = function() {
  // 	console.log($scope.modalShown);
  //   $scope.modalShown = !$scope.modalShown;
  // };
  $scope.modal2Shown = false;
  $scope.toggleModal2 = function() {
    $scope.modal2Shown = !$scope.modal2Shown;
  };

  $scope.posts = getPosts.data;

  $scope.approvePost = function(id) {
	  post = $scope.post;
 		adminService.approvePost(id);
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

	$scope.postBounty = function(bounty){
		adminService.postBounty(bounty);
	};

}]);
