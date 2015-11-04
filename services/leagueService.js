angular.module('futbolApp').service('leagueService', function ($http, $q) {

    this.getLeagueData = function (leagueID) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueID + '/leagueTable',
            headers: {'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc'}
        }).then(function (response) {
            // console.log(response.data);

            var leagueData = response.data.standing;
            var leagueStandings = [];

            for (var i = 0; i < leagueData.length; i++) {
                leagueStandings.push({
                    league: response.data.leagueCaption,
                    team: leagueData[i].teamName,
                    position: leagueData[i].position,
                    points: leagueData[i].points
                });
            }
            // console.log(leagueStandings);
            deferred.resolve(leagueStandings)
        })
        return deferred.promise
    }





});