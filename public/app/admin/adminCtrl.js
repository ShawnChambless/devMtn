angular.module('groupProject')
.controller('adminCtrl', ['$scope', 'adminService', 'getPosts', function($scope, adminService, getPosts) {

    $scope.posts = getPosts.data;

    $scope.approvePost = function(id) {
   		adminService.approvePost(id);
	};
}]);
