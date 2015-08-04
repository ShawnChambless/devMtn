angular.module('groupProject')
.service('userProfileService', ['$http', function($http) {

    this.getUser = function(userId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/' + userId
        });
    };

    this.updateUserInfo = function(userId, newInfo) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId,
            data: newInfo
        });
    };

    this.deleteAccount = function(userId) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + userId
        });
    };

    // this.getFavorites = function(userId) {
    //     return $http({
    //         method: 'GET',
    //         url: 'http://localhost:8080/api/users/' + userId + '/posts/favorites'
    //     });
    // };
    this.getPosts = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved'
        });
    };

    this.getBounties = function(userId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/' + userId + '/bounties'
        });
    };

    this.removeFavorite = function(userId, postId) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + userId,
            data: {
                favorites: postId
            }
        });
    };

    this.removeWatchLater = function(userId, postId) {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/users/' + userId,
            data: {
                watchLater: postId
            }
        });
    };

}]);
