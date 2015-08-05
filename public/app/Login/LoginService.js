angular.module('groupProject')
.service('LoginService', ['$http', '$q', function($http, $q) {

    var currUser = null;
    this.currentUser = function(){ return currUser; };

    this.getSessionUser = function(){
      var dfd = $q.defer();
      $http.get('/api/user/')
        .success(function(user){
          currUser = user;
          dfd.resolve(user);
        })
        .error(function(err){
          dfd.reject(err);
        });
      return dfd.promise;
    };

    this.createUser = function(firstName, lastName, email, password) {
      var dfd = $q.defer();
      $http({
        method: "POST",
        url: '/auth/local/signup',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
      }).then(function(response) {
        console.log('new user from the service', response);
        dfd.resolve(response.data);
      });
      return dfd.promise;
    };

    this.loginUser = function(email, password) {
      var dfd = $q.defer();
      $http({
        method: "POST",
        url: "/auth/local/login",
        data: {
          email: email,
          password: password
        }
      }).then(function(response) {
        currUser = response.data;
        dfd.resolve(response.data);
      }, function(err) {
        dfd.reject(err);
      });
      return dfd.promise;
    };

}]);
