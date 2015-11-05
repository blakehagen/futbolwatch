angular.module('futbolApp').directive('leagueStandings', function () {
    return {
        templateUrl: 'templates/leagueStandingsTmpl.html',

        scope: {
            league: '='
        }

    }






});