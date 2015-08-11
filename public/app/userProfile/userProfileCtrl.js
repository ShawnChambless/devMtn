angular.module('groupProject')
.controller('userProfileCtrl', ['$scope', 'userProfileService', 'getUser', 'LoginService', 'homeService', function($scope, userProfileService, getUser, LoginService, homeService) {
    // console.log(getUser)
    $scope.user = getUser;
    $scope.updateUserInfo = function(userId, newInfo) {
        userProfileService.updateUserInfo(userId, newInfo);
    };

    $scope.deleteAccount = function(userId) {
        userProfileService.deleteAccount(userId);
    };

    $scope.removeFavorite = function(userId, postId, index) {
        userProfileService.removeFavorite(userId, postId).then(function() {
            $scope.user.favorites.splice(index, 1);
        });
    };

    $scope.removeviewLater = function(userId, postId, index) {
        userProfileService.removeviewLater(userId, postId).then(function(){
            $scope.user.viewLater.splice(index, 1);
        });
    };

    $scope.deletePost = function(postId, index) {
        homeService.deletePost(postId).then(function(){
            $scope.user.posts.splice(index, 1);
        });
    };


}]);
