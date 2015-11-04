angular.module('futbolApp').directive('leagueStandings', function () {
    return {
        templateUrl: 'templates/leagueStandingsTmpl.html',

        scope: {
            league: '='
        },

        link: function (scope, elem, attrs) {
            scope.standings = false;

            elem.on('click', function () {
                console.log('clicked');
                scope.standings = !scope.standings;
                scope.$apply();
            })
        }
    }






});