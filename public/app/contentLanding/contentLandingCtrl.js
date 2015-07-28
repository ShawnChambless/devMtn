angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', 'contentLandingService', function($scope, contentLandingService) {

	$scope.modalShown = false;

	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};

	$scope.getPosts = function() {
		contentLandingService.getPosts();
	};

	$scope.getCategoryPosts = function() {
		contentLandingService.getCategoryPosts(cat);
	};

	$scope.posts = [
		{
			title: 'FAKE TITLE',
			url: 'URL',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
			tags: 'This, That, Other things as well',
			type: 'VIDEO'
		},
		{
			title: 'Super fake TITLE',
			url: 'URL',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
			tags: 'This, That, Other things as well',
			type: 'VIDEO'
		}
	]

}]);
