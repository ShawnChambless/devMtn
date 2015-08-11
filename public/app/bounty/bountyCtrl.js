angular.module('groupProject')

.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'adminService', 'currentUser', function($scope, bountyService, bounties, adminService, currentUser) {

    $scope.bounties = bounties.data;

    $scope.admin = currentUser.isAdmin;

    $scope.postBounty = function(bounty){
    	adminService.postBounty(bounty).then(function(resp){
        $scope.bounties.push(resp.data);
      });
    };

    $scope.modal2Shown = false;
    $scope.toggleModal2 = function() {
        $scope.modal2Shown = !$scope.modal2Shown;
    };
}]);
