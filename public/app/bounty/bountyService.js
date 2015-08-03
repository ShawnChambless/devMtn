angular.module('groupProject')
.service('bountyService', ['$http', function($http) {

    this.getBounties = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/bounties'
        });
    };

    this.getCategoryBounties = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/bounties/category' + cat
        });
    };

}]);
