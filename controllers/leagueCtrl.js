angular.module('futbolApp').controller('leagueCtrl', function ($scope, $stateParams, leagueService, upcomingMatchesService) {

    if ($stateParams.league === 'epl') {
        $scope.leagueId = 398;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Premier_League.svg/300px-Premier_League.svg.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.svg.png';
        $scope.leagueHeader = "English Premier League";
    } else if ($stateParams.league === 'spanish-primera') {
        $scope.leagueId = 399;
        $scope.leagueLogoPath = 'http://usclubsoccer.org/wp-content/uploads/2015/08/LALIGA_LOGO_V_2015-01COLOR-BLANCO-cropped.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png';
        $scope.leagueHeader = "Spanish Primera";
    } else if ($stateParams.league === 'bundesliga') {
        $scope.leagueId = 394;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Bundesliga_logo.svg/637px-Bundesliga_logo.svg.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1000px-Flag_of_Germany.svg.png';
        $scope.leagueHeader = "German Bundesliga";
    } else if ($stateParams.league === 'eredivisie') {
        $scope.leagueId = 404;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/ar/b/b7/271px-Eredivisie_logo.svg.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/900px-Flag_of_the_Netherlands.svg.png';
        $scope.leagueHeader = "Dutch Eredivisie";
    } else if ($stateParams.league === 'serie-a') {
        $scope.leagueId = 401;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/en/f/f7/LegaSerieAlogoTIM.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png';
        $scope.leagueHeader = "Italy Serie A";
    } else if ($stateParams.league === 'portugal-primeira') {
        $scope.leagueId = 402;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/en/0/04/Liga_portugal_logo2009.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png';
        $scope.leagueHeader = "Portugal Primeira";
    } else if ($stateParams.league === 'ligue1') {
        $scope.leagueId = 396;
        $scope.leagueLogoPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Logo_de_la_Ligue_1_%282008%29.svg/364px-Logo_de_la_Ligue_1_%282008%29.svg.png';
        $scope.flagPath = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png';
        $scope.leagueHeader = "France Ligue 1";
    }

    $scope.toggleStandings = false;

    $scope.getStandings = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData($scope.leagueId).then(function (response) {
                $scope.league = response
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
    };

    $scope.getUpComingMatches = function () {
        upcomingMatchesService.getNextMatches($scope.leagueId).then(function (response) {
            $scope.nextMatches = response;
        })
    };
    
    
    
    
    

});