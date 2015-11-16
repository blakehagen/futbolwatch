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
            console.log(response.data.results.collection1);
            var leagueData = response.data.results.collection1;
            leagueData = JSON.stringify(leagueData);
            leagueData = leagueData.replace(/playedGames/g,'gamesPlayed');
            leagueData = JSON.parse(leagueData);
            
            var leagueStandings = [];
            for (var i = 0; i < leagueData.length; i++) {
                if (leagueData[i].team.text === 'Rayo Vallecano de Madrid') {
                    leagueData[i].team.text = 'Rayo Vallecano';
                }
                if (leagueData[i].team.text === 'Futbol Club Barcelona') {
                    leagueData[i].team.text = 'Barcelona';
                }
                if (leagueData[i].team.text === 'Real Sociedad de Fútbol') {
                    leagueData[i].team.text = 'Real Sociedad';
                }
                if (leagueData[i].team.text === 'RCD Espanyol') {
                    leagueData[i].team.text = 'Espanyol';
                }
                if (leagueData[i].team.text === 'Olympique Lyonnais') {
                    leagueData[i].team.text = 'Olympique Lyon';
                }
                if (leagueData[i].team.text === 'FC Girondins de Bordeaux') {
                    leagueData[i].team.text = 'Girondins Bordeaux';
                }
                if (leagueData[i].team.text === 'Olympique de Marseille') {
                    leagueData[i].team.text = 'Olympique Marseille';
                }
                if (leagueData[i].team.text === 'Club Atlético de Madrid') {
                    leagueData[i].team.text = 'Atlético Madrid';
                }
                if (leagueData[i].team.text === 'Deportivo La Coruna') {
                    leagueData[i].team.text = 'La Coruña';
                }
                if (leagueData[i].team.text === 'Borussia Mönchengladbach') {
                    leagueData[i].team.text = 'M.Gladbach';
                }
                if (leagueData[i].team.text === 'Internazionale') {
                    leagueData[i].team.text = 'Inter Milano';
                }
                if (leagueData[i].team.text === 'Académica de Coimbra') {
                    leagueData[i].team.text = 'Académica Coimbra';
                }
                if (leagueData[i].team.text === 'West Bromwich Albion') {
                    leagueData[i].team.text = 'West Brom';
                }
                if (leagueData[i].team.text === 'Tottenham Hotspur') {
                    leagueData[i].team.text = 'Tottenham';
                }
                if (leagueData[i].team.text === 'PSV') {
                    leagueData[i].team.text = 'PSV Eindhoven';
                }
                if (leagueData[i].team.text === 'AZ') {
                    leagueData[i].team.text = 'AZ Alkmaar';
                }

                leagueData[i].team.text = leagueData[i].team.text.replace('ACF', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('AFC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('CFC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('FC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('CF', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('UD', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('RC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('TSG', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('SSC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('BSC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('SCO', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('OSC', '');
                leagueData[i].team.text = leagueData[i].team.text.replace('SC', '');
            }
            for (var i = 0; i < leagueData.length; i++) {
                leagueStandings.push({
                    team: leagueData[i].team.text.toUpperCase(),
                    position: leagueData[i].position,
                    points: leagueData[i].points,
                    wins: leagueData[i].wins,
                    losses: leagueData[i].losses,
                    draws: leagueData[i].draws,
                    gamesPlayed: leagueData[i].gamesPlayed,
                });
            }
            console.log(leagueStandings);
            deferred.resolve(leagueStandings)
        })
        return deferred.promise
    }
});