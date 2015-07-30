angular.module('groupProject')
.controller('LoginCtrl', ['$scope', 'LoginService', function($scope, LoginService, $location) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    // $scope.comparePasswords(password, password-confirm) {
    //   if(password === password-confirm) {
    //     $scope.password = password
    //   }
    // }

    $scope.createUser = function(firstName, lastName, email, password) {
      console.log('Brah, its user and email stuff', firstName, lastName, email, password);
      LoginService.createUser(firstName, lastName, email, password).then(function(data) {
        console.log('Duuude, you are a new user!', data);

        // $location.path('url')
        $scope.firstName = "";
        $scope.lastName = "";
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
