angular.module('waterCoolerFC').service('leagueService', function ($http, $q) {

    this.getLeagueData = function (leagueId) {
        if (leagueId === null) {
            return false;
        }
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://www.kimonolabs.com/api/' + leagueId + '?apikey=Gw5PcHFe2RGyDfn2GJlUBynbruB41WWo',
            
            
            
            
            // url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/leagueTable',
            // headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            console.log(response.data);
            var leagueData = response.data.standing;
            var leagueStandings = [];
            for (var i = 0; i < leagueData.length; i++) {
                if (leagueData[i].teamName === 'Rayo Vallecano de Madrid') {
                    leagueData[i].teamName = 'Rayo Vallecano';
                }
                if (leagueData[i].teamName === 'Real Sociedad de Fútbol') {
                    leagueData[i].teamName = 'Real Sociedad';
                }
                if (leagueData[i].teamName === 'RCD Espanyol') {
                    leagueData[i].teamName = 'Espanyol';
                }
                if (leagueData[i].teamName === 'Olympique Lyonnais') {
                    leagueData[i].teamName = 'Olympique Lyon';
                }
                if (leagueData[i].teamName === 'FC Girondins de Bordeaux') {
                    leagueData[i].teamName = 'Girondins Bordeaux';
                }
                if (leagueData[i].teamName === 'Olympique de Marseille') {
                    leagueData[i].teamName = 'Olympique Marseille';
                }
                if (leagueData[i].teamName === 'Club Atlético de Madrid') {
                    leagueData[i].teamName = 'Atlético Madrid';
                }
                if (leagueData[i].teamName === 'RC Deportivo La Coruna') {
                    leagueData[i].teamName = 'La Coruña';
                }
                if (leagueData[i].teamName === 'Bor. Mönchengladbach') {
                    leagueData[i].teamName = 'M.Gladbach';
                }
                if (leagueData[i].teamName === 'FC Internazionale Milano') {
                    leagueData[i].teamName = 'Inter Milano';
                }
                if (leagueData[i].teamName === 'Académica de Coimbra') {
                    leagueData[i].teamName = 'Académica Coimbra';
                }
                if (leagueData[i].teamName === 'West Bromwich Albion FC') {
                    leagueData[i].teamName = 'West Brom';
                }
                if (leagueData[i].teamName === 'Tottenham Hotspur FC') {
                    leagueData[i].teamName = 'Tottenham';
                }

                leagueData[i].teamName = leagueData[i].teamName.replace('ACF', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('AFC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('CFC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('FC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('CF', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('UD', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('RC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('TSG', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('SSC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('BSC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('SCO', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('OSC', '');
                leagueData[i].teamName = leagueData[i].teamName.replace('SC', '');
            }
            for (var i = 0; i < leagueData.length; i++) {
                leagueStandings.push({
                    league: response.data.leagueCaption,
                    team: leagueData[i].teamName.toUpperCase(),
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