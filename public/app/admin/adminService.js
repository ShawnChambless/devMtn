angular.module('groupProject')

.service('adminService', ['$http', function($http){

	this.getPosts = function(newPost) {
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/posts', //NEEDS NEW ENDPOINT
    });
  };
}]);
