angular.module('groupProject')
.service('bountyService', ['$http', function($http) {

    this.getBounties = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/bounties'
        });
    };

    this.getBountyId = function(bountyId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/bounties/' + bountyId
        });
    };

}]);
