angular.module('groupProject')
.controller('adminCtrl', ['$scope', function($scope) {

    $scope.getPosts = addContentService.getPost();

}]);
