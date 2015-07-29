angular.module('groupProject')
.controller('addContentCtrl', ['$scope', 'addContentService', function($scope, addContentService) {

  $scope.addPost = function(newPost) {
      addContentService.addPost($scope.newPost);
  };

}]);
