angular.module('groupProject')

.service('adminService', ['$http', 'LoginService', function($http, LoginService){

	this.getPosts = function(newPost) {
	    return $http({
	      method: 'GET',
	      url: 'http://localhost:8080/api/posts/pending'
	    });
  	};

  this.approvePost = function(postId, userId, bountyId){
 	$http({
  		method: 'PUT',
  		url: 'http://localhost:8080/api/posts/' + postId,
  		data: {
			isApproved: true,
			user: userId
		}
  	}).then(function(){
      if(bountyId){
				console.log('test');
        return $http({
        method: 'PUT',
        url: 'http://localhost:8080/api/users/' + userId + '/bounties/' + bountyId
       });
      }
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

  this.postBounty = function(bounty){
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/api/bounties',
      data: bounty
    });
  };
}]);
