angular.module('groupProject', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when('/content', {
        templateUrl: 'productionFiles/html/contentLanding/contentLandingTmpl.html',
        controller: 'contentLandingCtrl'
    })
    .otherwise('/content')
}]);
