angular.module('futbolApp').controller('homeCtrl', function ($scope, homeService) {

    $scope.getData = function () {
        homeService.getPremierLeagueData().then(function (response) {
            // console.log(response);
            $scope.epl = response;
        })
    }

    $scope.getData();








});