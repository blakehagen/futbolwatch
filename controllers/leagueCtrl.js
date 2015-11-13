angular.module('waterCoolerFC').controller('leagueCtrl', function ($scope, idService, leagueService, upcomingMatchesService, previousMatchService, topScorerService) {
    // Get League ID from idService
    $scope.id = function () {
        $scope.leagueData = idService.getLeagueId();
    }
    $scope.id();
    
    // Set ng-class to highlight the current active tab view
   
    if ($scope.leagueData.leagueId === null) {
        return false;
    } else {
        $scope.activeTable = false;
        $scope.activeFixtures = false;
        $scope.activeResults = false;
        $scope.activeScorers = false;
    }

    // Get League Standings

    $scope.getStandings = function () {
        if ($scope.leagueData.leagueId === null) {
            $scope.toggleInfo = true;
            $scope.activeInfo = true;
            return false;
        } else {
            leagueService.getLeagueData($scope.leagueData.leagueId).then(function (response) {
                $scope.league = response;
            })

            $scope.toggleStandings = true;
            $scope.toggleNextMatches = false;
            $scope.togglePreviousMatches = false;
            $scope.toggleScorers = false;
            $scope.toggleInfo = false;

            $scope.activeTable = true;
            $scope.activeFixtures = false;
            $scope.activeResults = false;
            $scope.activeScorers = false;
            $scope.activeInfo = false;
        }
    };

    $scope.getStandings(); // ---> default to show Standings on Load
    
    // Get Upcoming Matches
    $scope.toggleNextMatches = false;

    $scope.getNextMatches = function () {
        if ($scope.leagueData.leagueId === null) {
            return false;
        } else {
            upcomingMatchesService.getNextMatches($scope.leagueData.leagueId).then(function (response) {
                $scope.next = response;
            })
            $scope.toggleNextMatches = true;
            $scope.toggleStandings = false;
            $scope.togglePreviousMatches = false;
            $scope.toggleScorers = false;
            $scope.toggleInfo = false;

            $scope.activeTable = false;
            $scope.activeFixtures = true;
            $scope.activeResults = false;
            $scope.activeScorers = false;
            $scope.activeInfo = false;
        }
    };
    
    // Get Previous Matches
    $scope.togglePreviousMatches = false;

    $scope.getPreviousMatches = function () {
        if ($scope.leagueData.leagueId === null) {
            return false;
        } else {
            previousMatchService.getPreviousMatches($scope.leagueData.leagueId).then(function (response) {
                $scope.previous = response;
            })
            $scope.togglePreviousMatches = true;
            $scope.toggleScorers = false;
            $scope.toggleStandings = false;
            $scope.toggleNextMatches = false;
            $scope.toggleInfo = false;

            $scope.activeTable = false;
            $scope.activeFixtures = false;
            $scope.activeResults = true;
            $scope.activeScorers = false;
            $scope.activeInfo = false;
        }
    };
    
    // Get Top Scorers
    $scope.toggleScorers = false;

    $scope.getScorers = function () {
        if ($scope.leagueData.leagueId === null) {
            return false;
        } else {
            topScorerService.getTopScorers($scope.leagueData.topScorerId).then(function (response) {
                $scope.scorers = response;
            })
            $scope.toggleScorers = true;
            $scope.togglePreviousMatches = false;
            $scope.toggleStandings = false;
            $scope.toggleNextMatches = false;
            $scope.toggleInfo = false;

            $scope.activeTable = false;
            $scope.activeFixtures = false;
            $scope.activeResults = false;
            $scope.activeScorers = true;
            $scope.activeInfo = false;
        }
    };
    
    // Get Info Page 
    $scope.toggleInfo = false;

    $scope.getInfo = function () {

        $scope.toggleScorers = false;
        $scope.togglePreviousMatches = false;
        $scope.toggleStandings = false;
        $scope.toggleNextMatches = false;
        $scope.toggleInfo = true;

        $scope.activeTable = false;
        $scope.activeFixtures = false;
        $scope.activeResults = false;
        $scope.activeScorers = false;
        $scope.activeInfo = true;
    };
    
    // Toggle Small Menu //
    $scope.smallMenu = false;
    $scope.toggleSmallMenu = function () {
        $scope.smallMenu = !$scope.smallMenu;
    }
});