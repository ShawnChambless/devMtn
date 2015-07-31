angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', 'contentLandingService', 'getPosts', function($scope, contentLandingService, getPosts) {

	$scope.modalShown = false;

	$scope.posts = getPosts.data;

}]);
