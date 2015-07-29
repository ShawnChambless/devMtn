angular.module('groupProject')
.controller('LoginCtrl', ['$scope', 'LoginService', function($scope, LoginService) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    $scope.createUser = function(email, password) {
      console.log('Brah, its user and email stuff', email, password);
      LoginService.createUser(email, password).then(function(data) {
        console.log('Duuude, you are a new user!', data);

        $scope.email = "";
        $scope.password = "";
      });
    };

    $scope.loginUser = function(email, password) {
      LoginService.loginUser(email, password).then(function(data) {
        console.log('Bruh you are logged in!', data);

        $scope.email = "";
        $scope.password = "";
      })
      .catch(function(err){
        console.log(err);
        $scope.email = "";
        $scope.password = "";
      });
    };


}]);
