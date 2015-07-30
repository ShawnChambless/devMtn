angular.module('groupProject')
.controller('userProfileCtrl', ['$scope', 'userProfileService', 'getPosts', function($scope, userProfileService, getPosts) {

    $scope.profileInfo = function(userId) {
        userProfileService.profileInfo(userId);
    };

    $scope.updateUserInfo = function(userId, newInfo) {
        userProfileService.updateUserInfo(userId, newInfo);
    };

    $scope.deleteAccount = function(userId) {
        userProfileService.deleteAccount(userId);
    };

    // $scope.getFavorites = function() {
    //     userProfileService.getFavorites().then(function(resp) {
    //         $scope.favorites = resp.data;
    //     });
    // };

    $scope.posts = getPosts.data;

    $scope.getBounties = function(userId) {
        userProfileService.getBounties(userId).then(function(resp) {
            $scope.bounties = resp.data;
        });
    };


}]);
