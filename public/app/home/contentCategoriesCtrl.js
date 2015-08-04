angular.module('groupProject')
.controller('contentCategoriesCtrl', ['$scope', 'homeService', 'getCategoryPosts', function($scope, homeService, getCategoryPosts) {

    $scope.posts = getCategoryPosts.data;
    $scope.addPost = function(newPost) {
        addContentService.addPost($scope.newPost);
    };
    

}]);
