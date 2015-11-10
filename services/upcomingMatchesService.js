angular.module('waterCoolerFC').service('upcomingMatchesService', function ($http, $q) {

    this.getNextMatches = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/fixtures/?timeFrame=n21',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            // console.log(response.data.fixtures);
            var upcomingFixtures = response.data.fixtures;
            var upcoming = [];


            for (var i = 0; i < upcomingFixtures.length; i++) {
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('FC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('FC', '');
            }

            for (var i = 0; i < upcomingFixtures.length; i++) {
                upcoming.push({
                    matchDate: moment(upcomingFixtures[i].date).format('MM/DD'),
                    homeTeam: upcomingFixtures[i].homeTeamName,
                    awayTeam: upcomingFixtures[i].awayTeamName
                })
            }
            deferred.resolve(upcoming)
        })
        return deferred.promise
    }
});