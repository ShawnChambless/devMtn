angular.module('groupProject')

//////////// Show modal on button click ////////////
.controller('addContentCtrl', ['$scope', 'addContentService', function($scope, addContentService) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.addPost = function(newPost){
  	addContentService.addPost(newPost);
	};
}]);