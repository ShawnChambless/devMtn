angular.module("groupProject").controller("contentLandingCtrl",["$scope","contentLandingService",function(o,t){o.modalShown=!1,o.toggleModal=function(){o.modalShown=!o.modalShown},o.getPosts=function(){t.getPosts().then(function(t){console.log(t),o.posts=t.data})}(),o.getCategoryPosts=function(o){t.getCategoryPosts(o)}}]);