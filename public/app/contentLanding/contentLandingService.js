angular.module('groupProject')
.service('contentLandingService', ['$http', function($http) {

    this.getPosts = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved'
        });
    };

    this.getCategoryPosts = function(cat) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/cats/' + cat + '/approved'
        });
    };

    this.addToFavorites = function(userId, postId) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId,
            data: {
                favorites: postId
            }
        });
    };

    this.addToWatchLater = function(userId, postId) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId,
            data: {
                watchLater: postId
            }
        });
    };

}]);
