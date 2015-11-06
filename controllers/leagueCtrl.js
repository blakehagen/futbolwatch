angular.module('futbolApp').controller('leagueCtrl', function ($scope, leagueService) {


    $scope.toggleStandings = false;


    $scope.getEPL = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(398).then(function (response) {
                $scope.epl = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getSpanPrimera = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(399).then(function (response) {
                $scope.spanish = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getBundesliga = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(394).then(function (response) {
                $scope.bundesliga = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getSerieA = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(401).then(function (response) {
                $scope.serieA = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getLigue1 = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(396).then(function (response) {
                $scope.ligue1 = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getPortugalPrimeira = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(402).then(function (response) {
                $scope.portugalPrimeira = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }

    $scope.getEredivisie = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData(404).then(function (response) {
                $scope.eredivisie = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    }
    
    

    // $scope.getChampionsLeague = function () {
    //     leagueService.getLeagueData(---).then(function (response) {
    //         $scope.championsLeague = response;
    //     })
    // }









});