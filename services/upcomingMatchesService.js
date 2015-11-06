angular.module('futbolApp').service('upcomingMatchesService', function ($http, $q) {

    this.getNextMatches = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/fixtures/?timeFrame=n7',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }

        })

    }






});