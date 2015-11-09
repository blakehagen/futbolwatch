angular.module('waterCoolerFC').service('previousMatchService', function ($http, $q) {
    
    this.getPreviousMatches = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/fixtures/?timeFrame=p14',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            console.log(response.data.fixtures);
            deferred.resolve(response)
        })
        return deferred.promise
    }







});