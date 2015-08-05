angular.module('groupProject')

.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'adminService', function($scope, bountyService, bounties, adminService) {

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
