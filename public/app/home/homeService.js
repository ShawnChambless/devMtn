angular.module('groupProject')
.service('homeService', ['$http', 'LoginService', function($http, LoginService) {

    var user = LoginService.currentUser();

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

    this.addToFavorites = function(postId) {
        userId = user;
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + userId._id + '/favorites/' + postId
        });
    };

    this.addToWatchLater = function(postId) {
        userId = user;
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + user._id + '/watchLater/' + postId,
        });
    };

}]);
