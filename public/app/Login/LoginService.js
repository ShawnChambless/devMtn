angular.module('groupProject')
.service('LoginService', ['$http', function($http) {
    this.test2 = 'Test from service';

    this.createUser = function(email, password) {
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
