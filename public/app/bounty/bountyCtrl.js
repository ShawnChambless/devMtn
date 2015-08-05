angular.module('groupProject')
.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'currentUser', function($scope, bountyService, bounties, currentUser) {

  $scope.bounties = bounties.data;
}]);
