angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'getPosts', function($scope, adminService, getPosts) {

    $scope.posts = getPosts.data;

    $scope.approvePost = function(id) {
   		adminService.approvePost(id);
	};

	$scope.clearIt = function(){
		console.log($scope.show);
	};
}]);
