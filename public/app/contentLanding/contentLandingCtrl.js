angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', 'contentLandingService', 'getPosts', function($scope, contentLandingService, getPosts) {

	$scope.modalShown = false;

	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};


	$scope.posts = getPosts.data;
	
	$scope.getPosts = function() {
		contentLandingService.getPosts().then(function(resp) {
			$scope.posts = resp.data;
		});
	}


	$scope.getCategoryPosts = function(cat) {
		contentLandingService.getCategoryPosts(cat).then(function(resp) {
			$scope.posts = resp.data
		});
	};

}]);
