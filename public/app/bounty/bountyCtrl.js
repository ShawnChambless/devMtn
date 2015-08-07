angular.module('groupProject')

.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'currentUser', 'adminService', function($scope, bountyService, bounties, currentUser, adminService) {

  $scope.bounties = bounties.data;

  $scope.postBounty = function(bounty){
		adminService.postBounty(bounty);
			$scope.bounties.push(bounty);
	};

	$scope.modal2Shown = false;
    $scope.toggleModal2 = function() {
    $scope.modal2Shown = !$scope.modal2Shown;
  };
}]);
