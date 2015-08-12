angular.module('groupProject')

.service('addContentService', ['url', '$http', 'LoginService', '$q', function(url, $http, LoginService, $q){


	this.addPost = function(newPost, userId) {
		newPost.thumbnail = "assets/" + newPost.cat + ".png";

		newPost.user = userId;

			var dfd = $q.defer();
	    $http({
	      method: 'POST',
	      url: url.url + '/api/posts',
	      data: newPost
  		}).then(function(resp) {
				dfd.resolve(resp);
				$http({
				method: 'PUT',
				url: url.url + '/api/users/' + newPost.user + '/posts/' + resp.data._id
	  		});
  		}, function(error){
  			dfd.reject(error);
  		});
  		return dfd.promise;
	};

	this.addBountyPost = function(newPost) {
		newPost.thumbnail = "assets/" + newPost.cat + ".png";

		newPost.user = currentUser._id;

			var dfd = $q.defer();
	    $http({
	      method: 'POST',
	      url: url.url + '/api/posts',
	      data: newPost
  		}).then(function(resp) {
  			dfd.resolve(resp);
			 $http({
				method: 'PUT',
				url: url.url + '/api/users/' + newPost.user + '/posts/' + resp.data._id
	  		});
  		}, function(error){
  			dfd.reject(error);
  		});
  		return dfd.promise;
  	};

}]);
