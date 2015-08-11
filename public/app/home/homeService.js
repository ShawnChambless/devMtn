angular.module('groupProject')
.service('homeService', ['$http', 'LoginService', function($http, LoginService) {

    var user = LoginService.currentUser();

    this.getPosts = function(count) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved?count=' + count
        });
    };

    this.getPostsPaginated = function(count) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/approved?count=' + count
        });
    };

    this.getCategoryPosts = function(cat) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/cats/' + cat + '/approved'
        });
    };

    this.getCategoryPostsByTag = function(cat, tag) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/posts/cats/' + cat + '/tag/' + tag
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
            url: 'http://localhost:8080/api/users/' + user._id + '/watchLater/' + postId
        });
    };

    this.upVoteDownVote = function(postId, updatedVote){
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/posts/' + postId,
            data: {votes: updatedVote}
        });
    };

    this.deletePost = function(postId) {
        console.log(postId);
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/api/posts/' + postId
        });
    };

}]);
