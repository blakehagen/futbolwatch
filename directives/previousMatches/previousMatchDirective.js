angular.module('waterCoolerFC').directive('previousMatches', function () {
    return {
        templateUrl: './directives/previousMatches/previousMatchDirectiveTmpl.html',
        scope: {
            previous: '='
        },
        controller: function ($scope) {
            // Filter by Match Day on Previous Matches Tab
            $scope.matchDayOptions = [
                { 'matchDay': undefined, 'text': '-' },
                { 'matchDay': 1, 'text': '1' },
                { 'matchDay': 2, 'text': '2' },
                { 'matchDay': 3, 'text': '3' },
                { 'matchDay': 4, 'text': '4' },
                { 'matchDay': 5, 'text': '5' },
                { 'matchDay': 6, 'text': '6' },
                { 'matchDay': 7, 'text': '7' },
                { 'matchDay': 8, 'text': '8' },
                { 'matchDay': 9, 'text': '9' },
                { 'matchDay': 10, 'text': '10' },
                { 'matchDay': 11, 'text': '11' },
                { 'matchDay': 12, 'text': '12' },
                { 'matchDay': 13, 'text': '13' },
                { 'matchDay': 14, 'text': '14' },
                { 'matchDay': 15, 'text': '15' },
                { 'matchDay': 16, 'text': '16' },
                { 'matchDay': 17, 'text': '17' },
                { 'matchDay': 18, 'text': '18' },
                { 'matchDay': 19, 'text': '19' },
                { 'matchDay': 20, 'text': '20' },
                { 'matchDay': 21, 'text': '21' },
                { 'matchDay': 22, 'text': '22' },
                { 'matchDay': 23, 'text': '23' },
                { 'matchDay': 24, 'text': '24' },
                { 'matchDay': 25, 'text': '25' },
                { 'matchDay': 26, 'text': '26' },
                { 'matchDay': 27, 'text': '27' },
                { 'matchDay': 28, 'text': '28' },
                { 'matchDay': 29, 'text': '29' },
                { 'matchDay': 30, 'text': '30' },
                { 'matchDay': 31, 'text': '31' },
                { 'matchDay': 32, 'text': '32' },
                { 'matchDay': 33, 'text': '33' },
                { 'matchDay': 34, 'text': '34' },
                { 'matchDay': 35, 'text': '35' },
                { 'matchDay': 36, 'text': '36' },
                { 'matchDay': 37, 'text': '37' },
                { 'matchDay': 38, 'text': '38' },
                { 'matchDay': 39, 'text': '39' },
            ];
        }
    }
});