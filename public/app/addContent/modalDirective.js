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
        },
        templateUrl: 'app/addContent/addContentTmpl.html',
        controller: 'addContentCtrl'
    };

});
