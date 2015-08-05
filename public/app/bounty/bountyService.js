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

    // this.discardPost = function(bountyId){
    // return $http({
    //     method: 'DELETE',
    //     url: 'http://localhost:8080/api/bounties/' + bountyId
    //      });
    // };

    this.closeBounty = function(bountyId){
        return $http({
            method: 'PUT',
            url: 'http://localhost:8080/api/bounties/' + bountyId,
            data: {
                isOpen: false
            }
        });
    };

}]);
