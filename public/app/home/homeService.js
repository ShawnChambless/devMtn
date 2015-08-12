angular.module('groupProject')
.service('homeService', ['url', '$http', 'LoginService', function(url, $http, LoginService) {

    var user = LoginService.currentUser();
    var lastCount = 0;
    this.lastCount = function(){return lastCount;};
    this.setCount = function(count){lastCount = count;};

    this.getPosts = function(count) {
        lastCount = count;
        return $http({
            method: 'GET',
            url: url.url + '/api/posts/approved?count=' + count
        });
    };

    this.getCategoryPosts = function(cat) {
        return $http({
            method: 'GET',
            url: url.url + '/api/posts/cats/' + cat + '/approved'
        });
    };

    this.getCategoryPostsByTag = function(cat, tag) {
        return $http({
            method: 'GET',
            url: url.url + '/api/posts/cats/' + cat + '/tag/' + tag
        });
    };

    this.addToFavorites = function(postId, userId) {
        return $http({
            method: 'PUT',
            url: url.url + '/api/users/' + userId + '/favorites/' + postId
        });
    };

    this.addToviewLater = function(postId, userId) {
        return $http({
            method: 'PUT',
            url: url.url + '/api/users/' + userId + '/viewLater/' + postId
        });
    };

    this.upVoteDownVote = function(postId, updatedVote){
        return $http({
            method: 'PUT',
            url: url.url + '/api/posts/' + postId,
            data: {votes: updatedVote}
        });
    };

    this.deletePost = function(postId) {
        console.log(postId);
        return $http({
            method: 'DELETE',
            url: url.url + '/api/posts/' + postId
        });
    };

}]);
