angular.module('groupProject')

.service('adminService', ['url', '$http', 'LoginService', function(url, $http, LoginService){

	this.getPosts = function(newPost) {
	    return $http({
	      method: 'GET',
	      url: url.url + '/api/posts/pending'
	    });
  	};

  this.approvePost = function(postId, userId, bountyId){
 	$http({
  		method: 'PUT',
  		url: url.url + '/api/posts/' + postId,
  		data: {
			isApproved: true,
			user: userId
		}
  	}).then(function(){
      if(bountyId){
        return $http({
        method: 'PUT',
        url: url.url + '/api/users/' + userId + '/bounties/' + bountyId
       });
      }
    });

  };

  this.discardPost = function(id){
  	return $http({
  		method: 'DELETE',
  		url: url.url + '/api/posts/' + id
  	});
  };

  this.editPost = function(post){
  	return $http({
  		method: 'PUT',
  		url: url.url + '/api/posts/' + post._id,
  		data: post
  	});
  };

  this.postBounty = function(bounty){
    return $http({
      method: 'POST',
      url: url.url + '/api/bounties',
      data: bounty
    });
  };
}]);
