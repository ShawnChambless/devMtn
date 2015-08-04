angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', function($scope, bountyService, getBountyId) {

    $scope.bounties = getBountyId.data;

}]);
