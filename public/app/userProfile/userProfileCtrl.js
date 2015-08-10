angular.module('groupProject')
.controller('userProfileCtrl', ['$scope', 'userProfileService', 'getUser', 'LoginService', 'homeService', function($scope, userProfileService, getUser, LoginService, homeService) {

    $scope.user = getUser;
    // $scope.favorites = getUser.favorites;
    // $scope.viewLater = getUser.viewLater;

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
    //
    // $scope.getBounties = function(userId) {
    //     userProfileService.getBounties(userId).then(function(resp) {
    //         $scope.bounties = resp.data;
    //     });
    // };

    $scope.removeFavorite = function(userId, postId) {
        userProfileService.removeFavorite(userId, postId).then(function(resp) {
            $scope.user.favorites.splice(resp.data._id, 1);
        });
    };

    $scope.removeviewLater = function(userId, postId) {
        userProfileService.removeviewLater(userId, postId).then(function(resp) {
            $scope.user.viewLater.splice(resp.data._id, 1);
        });
    };

    $scope.deletePost = function(postId) {
        homeService.deletePost(postId);
    };


}]);
