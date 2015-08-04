<<<<<<< HEAD
angular.module("groupProject").directive("modalDialog",function(){return{restrict:"E",replace:!0,transclude:!0,link:function(t,o,e){t.dialogStyle={},e.width&&(t.dialogStyle.width=e.width),e.height&&(t.dialogStyle.height=e.height)},templateUrl:"app/addContent/addContentTmpl.html",controller:function(t,o,e){t.addPost=function(t){o.addPost(t)},t.editPost=function(t,o){console.log(t,o),e.editPost(t)}}}});
=======
angular.module("groupProject").directive("modalDialog",function(){return{restrict:"E",replace:!0,transclude:!0,link:function(t,o,n){t.dialogStyle={},n.width&&(t.dialogStyle.width=n.width),n.height&&(t.dialogStyle.height=n.height),t.hideModal=function(){t.show=!1}},templateUrl:"app/addContent/addContentTmpl.html",controller:function(t,o,n){t.addPost=function(t){o.addPost(t)},t.editPost=function(t,o){n.editPost(t)},t.toggle=function(){t.modal2Shown=!t.modal2Shown}}}});
>>>>>>> f23c510ec373ab552fad47c506b2ae9b73d87871
