angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyTitle', function($scope, bountyService, getBountyTitle) {

    $scope.bounties = getBountyTitle.data;

}]);
