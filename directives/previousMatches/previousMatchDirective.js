angular.module('waterCoolerFC').directive('previousMatches', function () {
    return {
        templateUrl: 'directives/previousMatches/previousMatchDirectiveTmpl.html',

        scope: {
            previous: '='
        }
    }




});