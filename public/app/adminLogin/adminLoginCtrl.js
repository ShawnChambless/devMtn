angular.module('groupProject')
.controller('adminLoginCtrl',['$scope', 'adminLoginService', function($scope, adminLoginService) {

    $scope.test = 'Test from controller';
    $scope.test2 = adminLoginService.test2;


}]);
