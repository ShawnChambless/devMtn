angular.module('groupProject')
.service('userProfileService', ['$http', 'LoginService', function($http, LoginService) {
    this.user = {};
    console.log('SERVICE', this.user);
    this.getUser = function(userId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/' + userId
        });
    };

    this.updateUserInfo = function(newInfo) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + this.user._id,
            data: newInfo
        });
    };

    this.deleteAccount = function() {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + this.user._id
        });
    };

    this.getPosts = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved'
        });
    };

    this.getBounties = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/' + this.user._id + '/bounties'
        });
    };

    this.removeFavorite = function(postId) {
        userId = user;
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + userId._id + '/favorites/' + postId,
        });
    };

    this.removeWatchLater = function(postId) {
        userId = user;
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + userId._id  + '/watchLater/' + postId
        });
    };

}]);
