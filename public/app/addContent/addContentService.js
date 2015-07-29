angular.module('groupProject')

.service('addContentService', ['$http', function($http){

    this.addPost = function(newPost) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/api/posts',
            data: newPost
        }).then(function(resp) {
            console.log(resp)
        });
    };

}]);
