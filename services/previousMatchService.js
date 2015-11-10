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
                previousFixtures[i].homeTeamName = previousFixtures[i].homeTeamName.replace('FC', '');
                previousFixtures[i].awayTeamName = previousFixtures[i].awayTeamName.replace('FC', '');
                
            }

            for (var i = 0; i < previousFixtures.length; i++) {
                previous.push({
                    date: moment(previousFixtures[i].date).format('ddd, MMM D, YYYY'),
                    matchDay: previousFixtures[i].matchday,
                    homeTeam: previousFixtures[i].homeTeamName,
                    homeTeamGoals: previousFixtures[i].result.goalsHomeTeam,
                    awayTeam: previousFixtures[i].awayTeamName,
                    awayTeamGoals: previousFixtures[i].result.goalsAwayTeam
                })
            }
            // console.log(previous);
            deferred.resolve(previous)
        })
        return deferred.promise
    }







});