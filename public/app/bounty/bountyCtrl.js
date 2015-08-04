angular.module('groupProject')
.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', function($scope, bountyService, bounties) {

    $scope.bounties = bounties.data;
    
}]);
