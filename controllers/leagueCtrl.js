angular.module('waterCoolerFC').controller('leagueCtrl', function ($scope, leagueService, upcomingMatchesService, idService) {
    
    // Get League ID from idService
    $scope.id = function () {
        $scope.leagueData = idService.getLeagueId();
    }

    $scope.id();
    
    // Get League Standings
    $scope.toggleStandings = false;

    $scope.getStandings = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData($scope.leagueData.leagueId).then(function (response) {
                $scope.league = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
        $scope.toggleNextMatches = false;
    };
    
    // Get Upcoming Matches
    $scope.toggleNextMatches = false;

    $scope.getNextMatches = function () {
        if ($scope.toggleNextMatches === false) {
            upcomingMatchesService.getNextMatches($scope.leagueData.leagueId).then(function (response) {
                $scope.next = response;
            })
        }
        $scope.toggleNextMatches = !$scope.toggleNextMatches;
        $scope.toggleStandings = false;
    };
    
    
});