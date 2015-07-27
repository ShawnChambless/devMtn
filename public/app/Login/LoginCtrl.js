angular.module('groupProject')
.controller('LoginCtrl',['$scope', 'LoginService', function($scope, LoginService) {

    $scope.test = 'Test from controller';
    $scope.test2 = LoginService.test2;


}]);
