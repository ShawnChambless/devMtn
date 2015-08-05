angular.module('groupProject')
.service('bountyService', ['$http', '$q', function($http, $q) {

    this.getBounties = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/bounties'
        }).then(function(response){
            dfd.resolve(response);
        });
        return dfd.promise;
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
