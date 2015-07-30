angular.module('groupProject')
.controller('LoginCtrl', ['$scope', 'LoginService', '$state', function($scope, LoginService, $state) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    // $scope.comparePasswords(password, password-confirm) {
    //   if(password === password-confirm) {
    //     $scope.password = password
    //   }
    // }

    $scope.createUser = function(firstName, lastName, email, password, passwordConfirm) {
      console.log('Brah, its user and email stuff', firstName, lastName, email, password);
      LoginService.createUser(firstName, lastName, email, password, passwordConfirm).then(function(data) {
        console.log('Duuude, you are a new user!', data);

        $state.go('login');
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.password = "";
      });
    };

    $scope.loginUser = function(email, password) {
      LoginService.loginUser(email, password).then(function(data) {
        console.log('Bruh you are logged in!', data);

        $state.go('home');
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
