angular.module('groupProject')

.service('adminService', ['$http', function($http){

	this.getPosts = function(newPost) {
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/api/posts/pending'
    });
  };

  this.approvePost = function(id){
  	return $http({
  		method: 'PUT',
  		url: 'http://localhost:8080/api/posts/' + id,
  		data: {isApproved: true}
  	});
  };

  this.discardPost = function(id){
  	return $http({
  		method: 'DELETE',
  		url: 'http://localhost:8080/api/posts/' + id
  	});
  };

  this.editPost = function(post){
  	return $http({
  		method: 'PUT',
  		url: 'http://localhost:8080/api/posts/' + post._id,
  		data: post
  	});
  };

  this.postBounty = function(){
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/'
    })
  }
}]);
