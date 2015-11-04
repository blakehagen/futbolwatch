angular.module('futbolApp').controller('homeCtrl', function ($scope, leagueService) {

    $scope.getEPL = function () {
        leagueService.getLeagueData(398).then(function (response) {
            $scope.epl = response;
        })

    }

    $scope.getSpanPrimera = function () {
        leagueService.getLeagueData(399).then(function (response) {
            $scope.spanish = response;
        })
    }









});