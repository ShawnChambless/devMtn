angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', 'LoginService', function($scope, bountyService, getBountyId, LoginService) {

    $scope.bounty = getBountyId.data[0];

    console.log(LoginService.currentUser().isAdmin);
    $scope.isAdmin = LoginService.currentUser().isAdmin;

}]);
