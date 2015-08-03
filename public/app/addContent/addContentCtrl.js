angular.module('groupProject')
.controller('addContentCtrl', ['$scope', 'addContentService', function($scope, addContentService) {

    $scope.addPost = function(newPost) {
        addContentService.addPost($scope.newPost);
    };
    // Remove this scope from this controller and place it with the parent controller
}]);
