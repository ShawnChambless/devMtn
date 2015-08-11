angular.module('groupProject')
.directive('modalDialog', function() {

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        link: function(scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        templateUrl: 'app/addContent/addContentTmpl.html',
        controller: function($scope, addContentService, adminService){
            $scope.addPost = function(newPost) {
                if (newPost.tags) newPost.tags = newPost.tags.split(', ');
                addContentService.addPost(newPost).then(function(resp){
                    $scope.hideSuccess = true; 
                    setTimeout(function(){
                        $scope.hideSuccess = false;
                        $scope.$apply();
                    }, 4000);
                }, 
                    function(error){
                        $scope.hideError = true;
                        setTimeout(function(){
                            $scope.hideError = false;
                            $scope.$apply();
                    }, 4000);
                });
                
            };

            $scope.addBountyPost = function(newPost) {
                newPost.bounty = $scope.bounty._id;
                addContentService.addPost(newPost).then(function(resp){
                    $scope.hideSuccess = true; 
                    setTimeout(function(){
                        $scope.hideSuccess = false;
                        $scope.$apply();
                    }, 4000);
                }, 
                    function(error){
                        $scope.hideError = true;
                        setTimeout(function(){
                            $scope.hideError = false;
                            $scope.$apply();
                    }, 4000);
                });
            };

            $scope.editPost = function(editPost, post) {
                adminService.editPost(editPost);
            };
            $scope.toggle = function(){
                $scope.modalShown = !$scope.modalShown;
            };
        }
        // controller: '@',
        // name: 'controllerName'
    };

});
