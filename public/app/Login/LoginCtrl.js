angular.module('groupProject')
.controller('LoginCtrl', ['$scope', function($scope) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };


}]);
