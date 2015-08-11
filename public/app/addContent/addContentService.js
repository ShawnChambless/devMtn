angular.module('groupProject')

.service('addContentService', ['$http', 'LoginService', '$q', function($http, LoginService, $q){

	var currentUser = LoginService.currentUser();

	this.addPost = function(newPost) {
		newPost.thumbnail = "assets/" + newPost.cat + ".png";

		newPost.user = currentUser._id;

			var dfd = $q.defer();
	    $http({
	      method: 'POST',
	      url: 'http://localhost:8080/api/posts',
	      data: newPost
  		}).then(function(resp) {
				dfd.resolve(resp);
				$http({
				method: 'PUT',
				url: 'http://localhost:8080/api/users/' + newPost.user + '/posts/' + resp.data._id
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
	      url: 'http://localhost:8080/api/posts',
	      data: newPost
  		}).then(function(resp) {
  			dfd.resolve(resp);
			 $http({
				method: 'PUT',
				url: 'http://localhost:8080/api/users/' + newPost.user + '/posts/' + resp.data._id
	  		});
  		}, function(error){
  			dfd.reject(error);
  		});
  		return dfd.promise;
  	};

}]);
