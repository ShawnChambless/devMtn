
angular.module("groupProject").service("adminService",["$http","LoginService",function(t,o){var s=o.currentUser();this.getPosts=function(o){return t({method:"GET",url:"http://localhost:8080/api/posts/pending"})},this.approvePost=function(o){return userId=s,t({method:"PUT",url:"http://localhost:8080/api/posts/"+o,data:{isApproved:!0,user:s._id}}).then(function(o){return t({method:"PUT",url:"http://localhost:8080/api/users/"+s._id+"/bounties/"+o.data.bounty})})},this.discardPost=function(o){return t({method:"DELETE",url:"http://localhost:8080/api/posts/"+o})},this.editPost=function(o){return t({method:"PUT",url:"http://localhost:8080/api/posts/"+o._id,data:o})},this.postBounty=function(o){return t({method:"POST",url:"http://localhost:8080/api/bounties",data:o})}}]);
