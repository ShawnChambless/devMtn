angular.module("groupProject").controller("adminCtrl",["$scope","adminService","currentUser","getPosts",function(o,t,n,r){var s=n;o.modalShown=!1,o.posts=r.data,o.approvePost=function(o,n){t.approvePost(o,s._id,n)},o.discardPost=function(o){t.discardPost(o)},o.editPost=function(o){t.editPost(o)},o.clearIt=function(){console.log(o.show)}}]);