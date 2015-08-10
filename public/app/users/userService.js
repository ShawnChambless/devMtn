angular.module('groupProject')
.service('userService', ['$http', function($http) {

    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/users/'
        });
    };

    this.updateUserBucks = function(user, bucks) {
        var newBucks = (user.devBucks + bucks);
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/users/' + user._id,
            data: {
                devBucks: newBucks
            }
        });
    };

}]);
