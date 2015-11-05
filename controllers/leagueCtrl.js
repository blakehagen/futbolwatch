angular.module('futbolApp').controller('leagueCtrl', function ($scope, leagueService) {


    $scope.league = true;
    $scope.toggleLeague = function () {
        $scope.league = !$scope.league;
    };


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

    $scope.getBundesliga = function () {
        leagueService.getLeagueData(394).then(function (response) {
            $scope.bundesliga = response;
            $scope.tableHeader = true;
        })
    }

    $scope.getSerieA = function () {
        leagueService.getLeagueData(401).then(function (response) {
            $scope.serieA = response;
        })
    }

    $scope.getLigue1 = function () {
        leagueService.getLeagueData(396).then(function (response) {
            $scope.ligue1 = response;
        })
    }

    $scope.getPortugalPrimeira = function () {
        leagueService.getLeagueData(402).then(function (response) {
            $scope.portugalPrimeira = response;
        })
    }

    $scope.getEredivisie = function () {
        leagueService.getLeagueData(404).then(function (response) {
            $scope.eredivisie = response;
        })
    }

    // $scope.getChampionsLeague = function () {
    //     leagueService.getLeagueData(---).then(function (response) {
    //         $scope.championsLeague = response;
    //     })
    // }









});