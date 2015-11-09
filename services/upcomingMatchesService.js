angular.module('waterCoolerFC').service('upcomingMatchesService', function ($http, $q) {

    this.getNextMatches = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/fixtures/?timeFrame=n14',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            // console.log(response.data.fixtures);
            var upcomingFixtures = response.data.fixtures;
            var upcoming =  [];
            
            for(var i = 0; i < upcomingFixtures.length; i++){
                upcoming.push({
                    matchDate: moment(upcomingFixtures[i].date).format('ddd, MMM D, YYYY  -  h:mma'),
                    homeTeam: upcomingFixtures[i].homeTeamName,
                    awayTeam: upcomingFixtures[i].awayTeamName
                })
            }
            deferred.resolve(upcoming)
        })
        return deferred.promise
    }
});