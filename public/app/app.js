angular.module('groupProject', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    var isLoggedIn = function(LoginService, $state){
        return LoginService.getSessionUser().then(function(user){
            if (!LoginService.currentUser()) $state.go('login');
            return user;
        });
    };

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'app/Login/LoginTmpl.html',
        controller: 'LoginCtrl',
        resolve: {
          sessionLogin: function(LoginService, $state){
            LoginService.getSessionUser().then(function(user){
              if (LoginService.currentUser()) $state.go('home');
              return user;
            });
          }
        }
    })
    .state('home', {
        url: '/home?count',
        templateUrl: 'app/home/homeTmpl.html',
        controller: 'homeCtrl',
        params: {
          count: {
            value: '0',
            squash: true
          }
        },
        resolve: {
          currentUser: isLoggedIn,
          getPosts: function(homeService, $stateParams, $state) {
              return homeService.getPosts($stateParams.count).then(function(postData) {
                if ($stateParams.count > 0 && postData.data.length === 0) return $state.go('home', {count: homeService.lastCount()});
                homeService.setCount($stateParams.count);
                return postData;
 		          });
          }
        }
    })
    .state('cat', {
        url: '/home/:cat',
        templateUrl: 'app/home/homeTmpl.html',
        controller: 'contentCategoriesCtrl',
        resolve: {
          currentUser: isLoggedIn,
          getCategoryPosts: function(homeService, $stateParams) {
            return homeService.getCategoryPosts($stateParams.cat).then(function(resp) {
                return resp;
              });
          }
        }
    })
    .state('tag', {
        url: '/home/:cat/:tag',
        templateUrl: 'app/home/homeTmpl.html',
        controller: 'contentTagsCtrl',
        resolve: {
          currentUser: isLoggedIn,
          getCategoryPostsByTag: function(homeService, $stateParams) {
            return homeService.getCategoryPostsByTag($stateParams.cat, $stateParams.tag).then(function(resp) {
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
            currentUser: isLoggedIn,
            getUser: function(LoginService, userProfileService, $state){
               return LoginService.getSessionUser().then(function(){
                   if (!LoginService.currentUser()) $state.go('login');
                   else {
                     return userProfileService.getUser(LoginService.currentUser()._id).then(function(res){
                         userProfileService.user = res.data;
                       return res.data;
                     });
                   }
               });
           }
       }
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/adminTmpl.html',
        controller: 'adminCtrl',
        resolve: {
          currentUser: function(LoginService, $state){
            LoginService.getSessionUser().then(function(){
              var currentUser = LoginService.currentUser();
              if (!currentUser) {$state.go('login');}
              else if (!currentUser.isAdmin) {$state.go('home');}
            });
          },
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
       currentUser: isLoggedIn,
           bounties: function(bountyService) {
               return bountyService.getBounties().then(function(resp) {
                   return resp;
               });
           }
        }
    })
    .state('bountyId', {
        url: '/bounties/:_id',
        templateUrl: 'app/bounty/bountyIdTmpl.html',
        controller: 'bountyIdCtrl',
        resolve: {
          currentUser: isLoggedIn,
            getBountyId: function(bountyService, $stateParams) {
                return bountyService.getBountyId($stateParams._id).then(function(resp) {
                    return resp;
                });
            }
        }
    })
    .state('users', {
        url: '/users',
        templateUrl: 'app/users/userTmpl.html',
        controller: 'userCtrl',
        resolve: {
            currentUser: isLoggedIn,
            getUsers: function(userService) {
                return userService.getUsers().then(function(resp) {
                    return resp.data;
                });
            }
        }
    });

}]);
