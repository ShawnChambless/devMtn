angular.module('groupProject')
.controller('contentTagsCtrl', ['$scope', 'homeService', 'getCategoryPostsByTag', function($scope, homeService, getCategoryPostsByTag) {

    $scope.posts = getCategoryPostsByTag.data;
    // $scope.addPost = function(newPost) {
    //     addContentService.addPost($scope.newPost);
    // };

}]);
