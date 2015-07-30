angular.module('groupProject')
.controller('contentCategoriesCtrl', ['$scope', 'contentLandingService', 'getCategoryPosts', function($scope, contentLandingService, getCategoryPosts) {

    $scope.posts = getCategoryPosts.data;

}]);
