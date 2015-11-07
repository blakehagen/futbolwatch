angular.module('futbolApp').directive('leagueStandings', function () {
    return {
        templateUrl: 'directives/leagueStandings/leagueStandingsTmpl.html',

        scope: {
            league: '='
        }
    }
});