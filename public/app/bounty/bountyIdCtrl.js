angular.module('groupProject')
.controller('bountyIdCtrl', ['$scope', 'bountyService', 'getBountyId', 'currentUser', '$state', function($scope, bountyService, getBountyId, currentUser, $state) {

  $scope.isAdmin = currentUser.isAdmin;
  $scope.bounty = getBountyId.data[0];

 //  $scope.discardPost = function(bountyId){
 //  	console.log(bountyId);
	// 	bountyService.discardPost(bountyId).then(function(res){console.log(res.data);});
	// };

	$scope.closeBounty = function(bountyId){
		bountyService.closeBounty(bountyId);
		$state.go('bounty');
	};


  var claimed = $scope.bounty.quantityClaimed ,
      needed = $scope.bounty.quantityNeeded ;
  var getNum = function(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  };
  if (claimed >= needed) {
    $scope.claimedArr = getNum(needed);
    $scope.remainderArr = [];
  } else {
    $scope.claimedArr = getNum(claimed);
    $scope.remainderArr = getNum(needed - claimed);
  }
  $scope.blockwidth = ((1 / needed) * 100) + '%';
  console.log($scope.blockwidth);

}]);
