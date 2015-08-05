angular.module('groupProject')
.controller('userProfileCtrl', ['$scope', 'userProfileService', 'getUser', 'LoginService', function($scope, userProfileService, getUser, LoginService) {

    $scope.user = getUser.data;
    console.log(getUser);
    $scope.updateUserInfo = function(userId, newInfo) {
        userProfileService.updateUserInfo(userId, newInfo);
    };

    $scope.deleteAccount = function(userId) {
        userProfileService.deleteAccount(userId);
    };

    $scope.getFavorites = function() {
        userProfileService.getFavorites().then(function(resp) {
            $scope.favorites = resp.data;
        });
    };

    $scope.getBounties = function(userId) {
        userProfileService.getBounties(userId).then(function(resp) {
            $scope.bounties = resp.data;
        });
    };

    $scope.removeFavorite = function(userId, postId) {
        userProfileService.removeFavorite(userId, postId);
    };

    $scope.removeWatchLater = function(userId, postId) {
        userProfileService.removeWatchLater(userId, postId);
    };


}]);
