angular.module('waterCoolerFC').service('idService', function ($stateParams) {

    this.getLeagueId = function () {
        if ($stateParams.league === 'epl') {
            return {
                leagueId: 398,
                leagueLogoPath: 'assets/epl.png',
                flagPath: 'assets/england.png',
                leagueHeader: "English Premier League"
            }
        } else if ($stateParams.league === 'spanish-primera') {
            return {
                leagueId: 399,
                leagueLogoPath: 'assets/laliga.png',
                flagPath: 'assets/spain.png',
                leagueHeader: "Spanish Primera"
            }
        } else if ($stateParams.league === 'bundesliga') {
            return {
                leagueId: 394,
                leagueLogoPath: 'assets/bundesliga.png',
                flagPath: 'assets/germany.png',
                leagueHeader: "German Bundesliga"
            }
        } else if ($stateParams.league === 'eredivisie') {
            return {
                leagueId: 404,
                leagueLogoPath: 'assets/eredivisie.jpg',
                flagPath: 'assets/netherlands.png',
                leagueHeader: "Dutch Eredivisie"
            }
        } else if ($stateParams.league === 'serie-a') {
            return {
                leagueId: 401,
                leagueLogoPath: 'assets/serieA.png',
                flagPath: 'assets/italy.png',
                leagueHeader: "Italy Serie A"
            }
        } else if ($stateParams.league === 'portugal-primeira') {
            return {
                leagueId: 402,
                leagueLogoPath: 'assets/portugalprimeira.png',
                flagPath: 'assets/portugal.png',
                leagueHeader: "Portugal Primeira"
            }
        } else if ($stateParams.league === 'ligue1') {
            return {
                leagueId: 396,
                leagueLogoPath: 'assets/ligue1.png',
                flagPath: 'assets/france.png',
                leagueHeader: "France Ligue 1"
            }
        } else if ($stateParams.league === 'champions-league') {
            return {
                leagueId: 396,
                leagueLogoPath: 'assets/champions-league.png',
                flagPath: 'assets/uefa.gif',
                leagueHeader: "UEFA Champions League"
            }
        }
    }

});