angular.module("groupProject").controller("userProfileCtrl",["$scope","userProfileService","getPosts","getUser",function(e,t,o,n){e.user=n.data,e.updateUserInfo=function(e,o){t.updateUserInfo(e,o)},e.deleteAccount=function(e){t.deleteAccount(e)},e.posts=o.data,e.getBounties=function(o){t.getBounties(o).then(function(t){e.bounties=t.data})}}]);