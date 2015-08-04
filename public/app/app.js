angular.module('groupProject', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

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
        url: '/profile',
        templateUrl: 'app/userProfile/userProfileTmpl.html',
        controller: 'userProfileCtrl',
        resolve: {
            // getPosts: function(userProfileService) {
            //     return userProfileService.getPosts().then(function(postData) {
            //     return postData;
	        //     });
            // },

            getUser: function(LoginService) {
                return LoginService.getCurrentUser().then(function(resp) {
                    return resp;
                });
            }

        }
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/adminTmpl.html',
        controller: 'adminCtrl',
        resolve: {
            getPosts: function(adminService){
                return adminService.getPosts().then(function(postData){
                    return postData;
                });
            }
        }
    })
    .state('bounty', {
        url: '/bounties',
        templateUrl: 'app/bounty/bountyTmpl.html',
        controller: 'bountyCtrl',
     resolve: {
           bounties: function(bountyService) {
               return bountyService.getBounties().then(function(resp) {
                   return resp;
               });
           }
        }
    })
    .state('bountyTitle', {
        url: '/bounties/:_id',
        templateUrl: 'app/bounty/bountyTmpl.html',
        controller: 'bountyIdCtrl',
        resolve: {
            getBountyTitle: function(bountyService, $stateParams) {
                return bountyService.getBountyTitle($stateParams._id).then(function(resp) {
                    return resp;
                });
            }
        }
    });
}]);
