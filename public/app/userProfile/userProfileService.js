angular.module('groupProject')
.service('userProfileService', ['url', '$http', 'LoginService', function(url, $http, LoginService) {
    this.user = {};

    this.getUser = function(userId) {
        return $http({
            method: 'GET',
            url: url.url + '/api/users/' + userId
        });
    };

    this.updateUserInfo = function(userId, newInfo) {
        return $http({
            method: 'PUT',
            url: url.url + '/api/users/' + userId,
            data: newInfo
        });
    };

    this.deleteAccount = function(userId) {
        return $http({
            method: 'DELETE',
            url: url.url + '/api/users/' + userId
        });
    };

    this.getBounties = function(userId) {
        return $http({
            method: 'GET',
            url: url.url + '/api/users/' + userId + '/bounties'
        });
    };

    this.removeFavorite = function(userId, postId) {
        return $http({
            method: 'DELETE',
            url: url.url + '/api/users/' + userId + '/favorites/' + postId,
        });
    };

    this.removeviewLater = function(userId, postId) {
        return $http({
            method: 'DELETE',
            url: url.url + '/api/users/' + userId  + '/viewLater/' + postId
        });
    };

}]);
