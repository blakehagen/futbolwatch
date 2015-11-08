angular.module('waterCoolerFC').service('leagueService', function ($http, $q) {

    this.getLeagueData = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/leagueTable',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            // console.log(response.data);
            var leagueData = response.data.standing;
            var leagueStandings = [];

            for (var i = 0; i < leagueData.length; i++) {
                leagueStandings.push({
                    league: response.data.leagueCaption,
                    team: leagueData[i].teamName,
                    position: leagueData[i].position,
                    points: leagueData[i].points,
                    wins: leagueData[i].wins,
                    losses: leagueData[i].losses,
                    draws: leagueData[i].draws,
                    gamesPlayed: leagueData[i].playedGames
                });
            }
            // console.log(leagueStandings);
            deferred.resolve(leagueStandings)
        })
        return deferred.promise
    }
});