angular.module('waterCoolerFC').service('idService', function ($stateParams) {

    this.getLeagueId = function () {
        if ($stateParams.league === 'epl') {
            return {
                leagueId: 398,
                leagueLogoPath: 'assets/epl.png',
                flagPath: 'assets/england.png',
                leagueHeader: "English Premier League",
                topScorerId: 'ce15ltey'
            }
        } else if ($stateParams.league === 'spanish-primera') {
            return {
                leagueId: 399,
                leagueLogoPath: 'assets/laliga.png',
                flagPath: 'assets/spain.png',
                leagueHeader: "Spanish Primera",
                topScorerId: 'daaqk8d0'
            }
        } else if ($stateParams.league === 'bundesliga') {
            return {
                leagueId: 394,
                leagueLogoPath: 'assets/bundesliga.png',
                flagPath: 'assets/germany.png',
                leagueHeader: "German Bundesliga",
                topScorerId: '3vb8ywkg'
            }
        } else if ($stateParams.league === 'eredivisie') {
            return {
                leagueId: 404,
                leagueLogoPath: 'assets/eredivisie.jpg',
                flagPath: 'assets/netherlands.png',
                leagueHeader: "Dutch Eredivisie",
                topScorerId: 'a71bgaeg'
            }
        } else if ($stateParams.league === 'serie-a') {
            return {
                leagueId: 401,
                leagueLogoPath: 'assets/serieA.png',
                flagPath: 'assets/italy.png',
                leagueHeader: "Italy Serie A",
                topScorerId: 'dp2cqh4g'
            }
        } else if ($stateParams.league === 'portugal-primeira') {
            return {
                leagueId: 402,
                leagueLogoPath: 'assets/portugalprimeira.png',
                flagPath: 'assets/portugal.png',
                leagueHeader: "Portugal Primeira",
                topScorerId: 'adx5ccsw'
            }
        } else if ($stateParams.league === 'ligue1') {
            return {
                leagueId: 396,
                leagueLogoPath: 'assets/ligue1.png',
                flagPath: 'assets/france.png',
                leagueHeader: "France Ligue 1",
                topScorerId: '4j8yjehk'
            }
        } else if ($stateParams.league === 'champions-league') {
            return {
                leagueId: 405,
                leagueLogoPath: 'assets/champions-league.png',
                flagPath: 'assets/uefa.gif',
                leagueHeader: "UEFA Champions League",
                topScorerId: 'dirj8dru'
            }
        }
    }

});