angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', 'currentUser', '$state', function($scope, bountyService, getBountyId, currentUser, $state) {

  $scope.bounty = getBountyId.data[0];
  $scope.isAdmin = currentUser.isAdmin;

 //  $scope.discardPost = function(bountyId){
 //  	console.log(bountyId);
	// 	bountyService.discardPost(bountyId).then(function(res){console.log(res.data);});
	// };

	$scope.closeBounty = function(bountyId){
		bountyService.closeBounty(bountyId);
		$state.go('bounty');
	};

  $scope.getNum = function(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(undefined);
    }
    console.log(bounty);
    return arr;
  };

}]);
