angular.module('futbolApp').directive('leagueStandings', function () {
    return {
        templateUrl: 'templates/directive-templates/leagueStandingsTmpl.html',

        scope: {
            league: '='
        }
    }
});