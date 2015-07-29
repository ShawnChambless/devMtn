angular.module('groupProject')
.service('LoginService', ['$http', '$q', function($http, $q) {
    this.test2 = 'Test from service';

    this.createUser = function(firstName, lastName, email, password) {
      var dfd = $q.defer();
      $http({
        method: "POST",
        url: '/auth/local/signup',
        data: {
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
        console.log('User logging in', response);
        dfd.resolve(response.data);
      }, function(err) {
        dfd.reject(err);
      });
      return dfd.promise;
    };
}]);
