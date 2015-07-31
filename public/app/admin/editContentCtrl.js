angular.module('groupProject')
.controller('editContentCtrl', ['$scope', 'adminService', function($scope, adminService) {
	// $scope.modalShown = false;
	// $scope.toggleThingy = function(){
	// 	console.log($scope.modalShown);
	// 	$scope.modalShown = !$scope.modalShown;
	// };
    $scope.editPost = function(editPost) {
        adminContentService.editPost($scope.editPost);
    };

}]);