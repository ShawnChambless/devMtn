angular.module('groupProject', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/Login', {
        templateUrl: 'productionFiles/html/Login/LoginTmpl.html',
        controller: 'LoginCtrl'
    })
    .otherwise('/Login')

    .when('/content', {
        templateUrl: 'productionFiles/html/contentLanding/contentLandingTmpl.html',
        controller: 'contentLandingCtrl'
    })
}]);
