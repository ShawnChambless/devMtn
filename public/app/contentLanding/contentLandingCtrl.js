angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', 'contentLandingService', 'getPosts', function($scope, contentLandingService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;

	// $scope.getPosts = function() {
	// 	contentLandingService.getPosts().then(function(resp) {
	// 		$scope.posts = resp.data;
	// 	});
	// };

}]);
