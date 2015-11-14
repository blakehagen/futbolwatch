angular.module('waterCoolerFC').service('previousMatchService', function ($http, $q) {

    this.getPreviousMatches = function (leagueId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/' + leagueId + '/fixtures/?timeFrame=p120',
            headers: { 'X-Auth-Token': '57d24f023e8247aea4badd00e37328dc' }
        }).then(function (response) {
            // console.log(response.data.fixtures);
            var previousFixtures = response.data.fixtures;
            var previous = [];

            for (var i = 0; i < previousFixtures.length; i++) {
                if (previousFixtures[i].homeTeamName === 'Rayo Vallecano de Madrid') {
                    previousFixtures[i].homeTeamName = 'Rayo Vallecano';
                }
                if (previousFixtures[i].homeTeamName === 'Real Sociedad de Fútbol') {
                    previousFixtures[i].homeTeamName = 'Real Sociedad';
                }
                if (previousFixtures[i].homeTeamName === 'RCD Espanyol') {
                    previousFixtures[i].homeTeamName = 'Espanyol';
                }
                if (previousFixtures[i].homeTeamName === 'Olympique Lyonnais') {
                    previousFixtures[i].homeTeamName = 'Olympique Lyon';
                }
                if (previousFixtures[i].homeTeamName === 'FC Girondins de Bordeaux') {
                    previousFixtures[i].homeTeamName = 'Girondins Bordeaux';
                }
                if (previousFixtures[i].homeTeamName === 'Olympique de Marseille') {
                    previousFixtures[i].homeTeamName = 'Olympique Marseille';
                }
                if (previousFixtures[i].homeTeamName === 'Club Atlético de Madrid') {
                    previousFixtures[i].homeTeamName = 'Atlético Madrid';
                }
                if (previousFixtures[i].homeTeamName === 'RC Deportivo La Coruna') {
                    previousFixtures[i].homeTeamName = 'La Coruña';
                }
                if (previousFixtures[i].homeTeamName === 'Bor. Mönchengladbach') {
                    previousFixtures[i].homeTeamName = 'M.Gladbach';
                }
                if (previousFixtures[i].homeTeamName === 'Feyenoord Rotterdam') {
                    previousFixtures[i].homeTeamName = 'F. Rotterdam';
                }
                if (previousFixtures[i].homeTeamName === 'SC Cambuur-Leeuwarden') {
                    previousFixtures[i].homeTeamName = 'C.Leeuwarden';
                }
                if (previousFixtures[i].homeTeamName === 'FC Internazionale Milano') {
                    previousFixtures[i].homeTeamName = 'Inter Milano';
                }
                if (previousFixtures[i].homeTeamName === 'Académica de Coimbra') {
                    previousFixtures[i].homeTeamName = 'Académica Coimbra';
                }
                if (previousFixtures[i].homeTeamName === 'West Bromwich Albion FC') {
                    previousFixtures[i].homeTeamName = 'West Brom';
                }
                if (previousFixtures[i].homeTeamName === 'Tottenham Hotspur FC') {
                    previousFixtures[i].homeTeamName = 'Tottenham';
                }
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('ACF', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('AFC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('CFC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('FC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('CF', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('UD', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('RC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('TSG', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('SSC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('BSC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('SCO', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('OSC', '');
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('SC', '');
            }
            for (var i = 0; i < previousFixtures.length; i++) {
                if (previousFixtures[i].awayTeamName === 'Rayo Vallecano de Madrid') {
                    previousFixtures[i].awayTeamName = 'Rayo Vallecano';
                }
                if (previousFixtures[i].awayTeamName === 'Real Sociedad de Fútbol') {
                    previousFixtures[i].awayTeamName = 'Real Sociedad';
                }
                if (previousFixtures[i].awayTeamName === 'RCD Espanyol') {
                    previousFixtures[i].awayTeamName = 'Espanyol';
                }
                if (previousFixtures[i].awayTeamName === 'Olympique Lyonnais') {
                    previousFixtures[i].awayTeamName = 'Olympique Lyon';
                }
                if (previousFixtures[i].awayTeamName === 'FC Girondins de Bordeaux') {
                    previousFixtures[i].awayTeamName = 'Girondins Bordeaux';
                }
                if (previousFixtures[i].awayTeamName === 'Olympique de Marseille') {
                    previousFixtures[i].awayTeamName = 'Olympique Marseille';
                }
                if (previousFixtures[i].awayTeamName === 'Club Atlético de Madrid') {
                    previousFixtures[i].awayTeamName = 'Atlético Madrid';
                }
                if (previousFixtures[i].awayTeamName === 'RC Deportivo La Coruna') {
                    previousFixtures[i].awayTeamName = 'La Coruña';
                }
                if (previousFixtures[i].awayTeamName === 'Bor. Mönchengladbach') {
                    previousFixtures[i].awayTeamName = 'M.Gladbach';
                }
                if (previousFixtures[i].awayTeamName === 'Feyenoord Rotterdam') {
                    previousFixtures[i].awayTeamName = 'F. Rotterdam';
                }
                if (previousFixtures[i].awayTeamName === 'SC Cambuur-Leeuwarden') {
                    previousFixtures[i].awayTeamName = 'C.Leeuwarden';
                }
                if (previousFixtures[i].awayTeamName === 'FC Internazionale Milano') {
                    previousFixtures[i].awayTeamName = 'Inter Milano';
                }
                if (previousFixtures[i].awayTeamName === 'Académica de Coimbra') {
                    previousFixtures[i].awayTeamName = 'Académica Coimbra';
                }
                if (previousFixtures[i].awayTeamName === 'West Bromwich Albion FC') {
                    previousFixtures[i].awayTeamName = 'West Brom';
                }
                if (previousFixtures[i].awayTeamName === 'Tottenham Hotspur FC') {
                    previousFixtures[i].awayTeamName = 'Tottenham';
                }
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('ACF', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('AFC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('CFC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('FC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('CF', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('UD', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('RC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('TSG', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('SSC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('BSC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('SCO', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('OSC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('SC', '');
            }
            for (var i = 0; i < previousFixtures.length; i++) {
                previous.push({
                    date: moment(previousFixtures[i].date).format('ddd, MMM D, YYYY'),
                    matchDay: previousFixtures[i].matchday,
                    homeTeam: previousFixtures[i].homeTeamName.toUpperCase(),
                    homeTeamGoals: previousFixtures[i].result.goalsHomeTeam,
                    awayTeam: previousFixtures[i].awayTeamName.toUpperCase(),
                    awayTeamGoals: previousFixtures[i].result.goalsAwayTeam
                })
            }
            // console.log(previous);
            deferred.resolve(previous)
        })
        return deferred.promise
    }
});