angular.module('groupProject', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/login')

   $stateProvider
   .state('login', {
       url: '/login',
       templateUrl: 'app/Login/LoginTmpl.html',
       controller: 'LoginCtrl'
   })
   .state('home', {
       url: '/home',
       templateUrl: 'app/contentLanding/contentLandingTmpl.html',
       controller: 'contentLandingCtrl'
   })
   .state('profile',  {
       url: '/profile'
   })
   .state('admin', {
       url: '/admin'
   })
   .state('category', {
       url: '/category'
   })
   .state('bounty', {
       url: '/bounty'
   });
}]);
