angular.module('groupProject')
.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'LoginService', function($scope, bountyService, bounties, LoginService) {

  $scope.bounties = bounties.data;

  $scope.discardPost = function(id){
		bountyService.discardPost(id);
	};

}]);
