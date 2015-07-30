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
        controller: 'contentLandingCtrl',
        resolve: {
            getPosts: function(contentLandingService) {
                return contentLandingService.getPosts().then(function(postData) {
                return postData;
   		    });
            }
        }
    })
    .state('cat', {
        url: '/home/:cat',
        templateUrl: 'app/contentLanding/contentLandingTmpl.html',
        controller: 'contentCategoriesCtrl',
        resolve: {
            getCategoryPosts: function(contentLandingService, $stateParams) {
            return contentLandingService.getCategoryPosts($stateParams.cat).then(function(resp) {
            return resp;
            });
            }
        }
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
