angular.module('groupProject')
.service('userProfileService', ['$http', function($http) {

    this.getUser = function(userId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/55ba825fb21423e9e13ba4a6'
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

}]);
