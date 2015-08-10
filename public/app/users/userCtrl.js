angular.module('groupProject')
.controller('userCtrl', ['$scope', 'userService', 'getUsers', 'currentUser', function($scope, userService, getUsers, currentUser) {

    $scope.users = getUsers;

    $scope.updateUserBucks = function(user, bucks) {
        userService.updateUserBucks(user, bucks).then(function(resp) {
            console.log(resp);
        });
    };

}]);
