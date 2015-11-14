angular.module('waterCoolerFC').directive('upcomingMatches', function () {
    return {
        templateUrl: '/directives/upcomingMatches/upcomingMatchesTmpl.html',
        scope: {
            next: '='
        }
    }
});