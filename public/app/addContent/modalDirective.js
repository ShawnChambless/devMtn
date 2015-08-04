angular.module('groupProject')
.directive('modalDialog', function() {

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        // scope: {},
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
        },
        templateUrl: 'app/addContent/addContentTmpl.html',
        controller: function($scope, addContentService, adminService){
            $scope.addPost = function(newPost) {
                // console.log(newPost, $scope.newPost);
                addContentService.addPost(newPost);
            };

            $scope.editPost = function(editPost, post) {
                console.log(editPost, post);
                adminService.editPost(editPost);
            };
        }
        // controller: '@',
        // name: 'controllerName'
    };

});
