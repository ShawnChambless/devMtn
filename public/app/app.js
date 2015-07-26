angular.module('groupProject', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/adminLogin', {
        templateUrl: 'public/productionFiles/html/adminLogin/adminLoginTmpl.html',
        controller: 'adminLoginCtrl'
    })
    .otherwise('/adminLogin')
}]);
