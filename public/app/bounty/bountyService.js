angular.module('groupProject')
.service('bountyService', ['url', '$http', '$q', function(url, $http, $q) {

    this.getBounties = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: url.url + '/api/bounties'
        }).then(function(response){
            dfd.resolve(response);
        });
        return dfd.promise;
    };

    this.getBountyId = function(bountyId) {
        return $http({
            method: 'GET',
            url: url.url + '/api/bounties/' + bountyId
        });
    };

    this.closeBounty = function(bountyId){
        return $http({
            method: 'PUT',
            url: url.url + '/api/bounties/' + bountyId,
            data: {
                isOpen: false
            }
        });
    };

}]);
