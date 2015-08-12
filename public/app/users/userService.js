angular.module('groupProject')
.service('userService', ['url', '$http', function(url, $http) {

    this.getUsers = function() {
        return $http({
            method: 'GET',
            url: url.url + '/api/users/'
        });
    };

    this.updateUserBucks = function(user, bucks) {
        var newBucks = (user.devBucks + bucks);
        return $http({
            method: 'PUT',
            url: url.url + '/api/users/' + user._id,
            data: {
                devBucks: newBucks
            }
        });
    };

}]);
