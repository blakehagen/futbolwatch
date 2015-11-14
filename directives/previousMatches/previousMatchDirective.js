angular.module('waterCoolerFC').directive('previousMatches', function () {
    return {
        templateUrl: '/directives/previousMatches/previousMatchDirectiveTmpl.html',
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
                { 'matchDay': 20, 'text': '20' }
            ];
        }
    }
});