angular.module('waterCoolerFC').directive('topScorers', function () {
    return {
        templateUrl: './directives/topScorers/topScorers.html',
        scope: {
            scorers: '='
        } 
    }
});