angular.module('groupProject')
.controller('bountyCtrl', ['$scope', 'bountyService', 'bounties', 'LoginService', function($scope, bountyService, bounties, LoginService) {

    $scope.bounties = bounties.data;
    console.log(LoginService.currentUser().isAdmin);
    $scope.isAdmin = LoginService.currentUser().isAdmin; 

    // $scope.checkAdmin = function(){
    // 	currentUser.isAdmin = true;
    // }
}]);
