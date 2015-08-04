angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', 'LoginService', function($scope, bountyService, getBountyId, LoginService) {

  $scope.bounty = getBountyId.data[0];

  $scope.isAdmin = LoginService.currentUser().isAdmin;

  $scope.discardPost = function(bountyId){
  	console.log(bountyId)
		bountyService.discardPost(bountyId).then(function(res){console.log(res.data)});
	};

}]);
