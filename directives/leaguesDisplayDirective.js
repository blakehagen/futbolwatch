angular.module('futbolApp').directive('leagueDisplay', function () {
    return {
        templateUrl: 'templates/leaguesTmpl.html',

        scope: {
            league: '='
        }

    }






});