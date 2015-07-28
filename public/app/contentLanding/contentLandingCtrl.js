angular.module('groupProject')
.controller('contentLandingCtrl', ['$scope', function($scope) {

//////////// Show modal on button click ////////////
	$scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);
