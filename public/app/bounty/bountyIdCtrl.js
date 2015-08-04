angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', function($scope, bountyService, getBountyId) {

    $scope.bounty = getBountyId.data[0];

}]);
