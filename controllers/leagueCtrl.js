angular.module('waterCoolerFC').controller('leagueCtrl', function ($scope, idService, leagueService, upcomingMatchesService, previousMatchService, topScorerService) {
    
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
        $scope.togglePreviousMatches = false;
        $scope.toggleScorers = false;
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
        $scope.togglePreviousMatches = false;
        $scope.toggleScorers = false;
    };
    
    // Get Previous Matches
    $scope.togglePreviousMatches = false;

    $scope.getPreviousMatches = function () {
        if ($scope.togglePreviousMatches === false) {
            previousMatchService.getPreviousMatches($scope.leagueData.leagueId).then(function (response) {
                $scope.previous = response;
            })
        }
        $scope.togglePreviousMatches = !$scope.togglePreviousMatches;
        $scope.toggleScorers = false;
        $scope.toggleStandings = false;
        $scope.toggleNextMatches = false;

    };
    
    // Get Top Scorers
    $scope.toggleScorers = false;

    $scope.getScorers = function () {
        if ($scope.toggleScorers === false) {
            topScorerService.getTopScorers($scope.leagueData.topScorerId).then(function (response) {
                $scope.scorers = response;
            })
        }
        $scope.toggleScorers = !$scope.toggleScorers;
        $scope.togglePreviousMatches = false;
        $scope.toggleStandings = false;
        $scope.toggleNextMatches = false;
    };
});