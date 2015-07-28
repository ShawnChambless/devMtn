angular.module('groupProject', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/content');

   $stateProvider
   .state('home', {
       url: '/home',
       templateUrl: 'productionFiles/html/contentLanding/contentLandingTmpl.html',
       controller: 'contentLandingCtrl'
   })
   .state('profile',  {
       url: '/profile',
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