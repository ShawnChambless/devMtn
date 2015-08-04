angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'getPosts', function($scope, adminService, getPosts) {

	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};

    $scope.posts = getPosts.data;

    $scope.approvePost = function(id) {
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
}]);
