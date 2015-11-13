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
                if (upcomingFixtures[i].homeTeamName === 'Rayo Vallecano de Madrid') {
                    upcomingFixtures[i].homeTeamName = 'Rayo Vallecano';
                }
                if (upcomingFixtures[i].homeTeamName === 'Real Sociedad de Fútbol') {
                    upcomingFixtures[i].homeTeamName = 'Real Sociedad';
                }
                if (upcomingFixtures[i].homeTeamName === 'RCD Espanyol') {
                    upcomingFixtures[i].homeTeamName = 'Espanyol';
                }
                if (upcomingFixtures[i].homeTeamName === 'Olympique Lyonnais') {
                    upcomingFixtures[i].homeTeamName = 'Olympique Lyon';
                }
                if (upcomingFixtures[i].homeTeamName === 'FC Girondins de Bordeaux') {
                    upcomingFixtures[i].homeTeamName = 'Girondins Bordeaux';
                }
                if (upcomingFixtures[i].homeTeamName === 'Olympique de Marseille') {
                    upcomingFixtures[i].homeTeamName = 'Olympique Marseille';
                }
                if (upcomingFixtures[i].homeTeamName === 'Club Atlético de Madrid') {
                    upcomingFixtures[i].homeTeamName = 'Atlético Madrid';
                }
                if (upcomingFixtures[i].homeTeamName === 'RC Deportivo La Coruna') {
                    upcomingFixtures[i].homeTeamName = 'La Coruña';
                }
                if (upcomingFixtures[i].homeTeamName === 'Bor. Mönchengladbach') {
                    upcomingFixtures[i].homeTeamName = 'M.Gladbach';
                }
                if (upcomingFixtures[i].homeTeamName === 'Feyenoord Rotterdam') {
                    upcomingFixtures[i].homeTeamName = 'F. Rotterdam';
                }
                if (upcomingFixtures[i].homeTeamName === 'SC Cambuur-Leeuwarden') {
                    upcomingFixtures[i].homeTeamName = 'C.Leeuwarden';
                }
                if (upcomingFixtures[i].homeTeamName === 'FC Internazionale Milano') {
                    upcomingFixtures[i].homeTeamName = 'Inter Milano';
                }
                if (upcomingFixtures[i].homeTeamName === 'Académica de Coimbra') {
                    upcomingFixtures[i].homeTeamName = 'Académica Coimbra';
                }
                if (upcomingFixtures[i].homeTeamName === 'West Bromwich Albion FC') {
                    upcomingFixtures[i].homeTeamName = 'West Brom';
                }
                if (upcomingFixtures[i].homeTeamName === 'Tottenham Hotspur FC') {
                    upcomingFixtures[i].homeTeamName = 'Tottenham';
                }
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('ACF', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('AFC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('CFC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('FC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('CF', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('UD', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('RC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('TSG', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('SSC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('BSC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('SCO', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('OSC', '');
                upcomingFixtures[i].homeTeamName = upcomingFixtures[i].homeTeamName.replace('SC', '');
            }
            for (var i = 0; i < upcomingFixtures.length; i++) {
                if (upcomingFixtures[i].awayTeamName === 'Rayo Vallecano de Madrid') {
                    upcomingFixtures[i].awayTeamName = 'Rayo Vallecano';
                }
                if (upcomingFixtures[i].awayTeamName === 'Real Sociedad de Fútbol') {
                    upcomingFixtures[i].awayTeamName = 'Real Sociedad';
                }
                if (upcomingFixtures[i].awayTeamName === 'RCD Espanyol') {
                    upcomingFixtures[i].awayTeamName = 'Espanyol';
                }
                if (upcomingFixtures[i].awayTeamName === 'Olympique Lyonnais') {
                    upcomingFixtures[i].awayTeamName = 'Olympique Lyon';
                }
                if (upcomingFixtures[i].awayTeamName === 'FC Girondins de Bordeaux') {
                    upcomingFixtures[i].awayTeamName = 'Girondins Bordeaux';
                }
                if (upcomingFixtures[i].awayTeamName === 'Olympique de Marseille') {
                    upcomingFixtures[i].awayTeamName = 'Olympique Marseille';
                }
                if (upcomingFixtures[i].awayTeamName === 'Club Atlético de Madrid') {
                    upcomingFixtures[i].awayTeamName = 'Atlético Madrid';
                }
                if (upcomingFixtures[i].awayTeamName === 'RC Deportivo La Coruna') {
                    upcomingFixtures[i].awayTeamName = 'La Coruña';
                }
                if (upcomingFixtures[i].awayTeamName === 'Bor. Mönchengladbach') {
                    upcomingFixtures[i].awayTeamName = 'M.Gladbach';
                }
                if (upcomingFixtures[i].awayTeamName === 'Feyenoord Rotterdam') {
                    upcomingFixtures[i].awayTeamName = 'F. Rotterdam';
                }
                if (upcomingFixtures[i].awayTeamName === 'SC Cambuur-Leeuwarden') {
                    upcomingFixtures[i].awayTeamName = 'C.Leeuwarden';
                }
                if (upcomingFixtures[i].awayTeamName === 'FC Internazionale Milano') {
                    upcomingFixtures[i].awayTeamName = 'Inter Milano';
                }
                if (upcomingFixtures[i].awayTeamName === 'Académica de Coimbra') {
                    upcomingFixtures[i].awayTeamName = 'Académica Coimbra';
                }
                if (upcomingFixtures[i].awayTeamName === 'West Bromwich Albion FC') {
                    upcomingFixtures[i].awayTeamName = 'West Brom';
                }
                if (upcomingFixtures[i].awayTeamName === 'Tottenham Hotspur FC') {
                    upcomingFixtures[i].awayTeamName = 'Tottenham';
                }
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('ACF', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('AFC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('CFC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('FC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('CF', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('UD', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('RC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('TSG', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('SSC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('BSC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('SCO', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('OSC', '');
                upcomingFixtures[i].awayTeamName = upcomingFixtures[i].awayTeamName.replace('SC', '');
            }
            for (var i = 0; i < upcomingFixtures.length; i++) {
                upcoming.push({
                    matchDate: moment(upcomingFixtures[i].date).format('MM/DD'),
                    homeTeam: upcomingFixtures[i].homeTeamName.toUpperCase(),
                    awayTeam: upcomingFixtures[i].awayTeamName.toUpperCase()
                })
            }
            deferred.resolve(upcoming)
        })
        return deferred.promise
    }
});