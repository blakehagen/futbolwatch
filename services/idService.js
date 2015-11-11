angular.module('waterCoolerFC').service('idService', function ($stateParams) {

    this.getLeagueId = function () {
        if ($stateParams.league === 'epl') {
            return {
                leagueId: 398,
                leagueLogoPath: 'assets/epl.png',
                flagPath: 'assets/england.png',
                leagueHeader: "ENGLISH PREMIER LEAGUE",
                topScorerId: 'ce15ltey',
                nextTeam: '#/leagues/spanish-primera',
                previousTeam: '#/leagues/champions-league'
            }
        } else if ($stateParams.league === 'spanish-primera') {
            return {
                leagueId: 399,
                leagueLogoPath: 'assets/laliga.png',
                flagPath: 'assets/spain.png',
                leagueHeader: "SPANISH PRIMERA",
                topScorerId: 'daaqk8d0',
                nextTeam: '#/leagues/bundesliga',
                previousTeam: '#/leagues/epl'
            }
        } else if ($stateParams.league === 'bundesliga') {
            return {
                leagueId: 394,
                leagueLogoPath: 'assets/bundesliga-vector-logo.png',
                flagPath: 'assets/germany.png',
                leagueHeader: "GERMAN BUNDESLIGA",
                topScorerId: '3vb8ywkg',
                nextTeam: '#/leagues/eredivisie',
                previousTeam: '#/leagues/spanish-primera'
            }
        } else if ($stateParams.league === 'eredivisie') {
            return {
                leagueId: 404,
                leagueLogoPath: 'assets/eredivisie.jpg',
                flagPath: 'assets/netherlands.png',
                leagueHeader: "DUTCH EREDIVISIE",
                topScorerId: 'a71bgaeg',
                nextTeam: '#/leagues/serie-a',
                previousTeam: '#/leagues/bundesliga'
            }
        } else if ($stateParams.league === 'serie-a') {
            return {
                leagueId: 401,
                leagueLogoPath: 'assets/serieA.png',
                flagPath: 'assets/italy.png',
                leagueHeader: "ITALY SERIE A",
                topScorerId: 'dp2cqh4g',
                nextTeam: '#/leagues/portugal-primeira',
                previousTeam: '#/leagues/eredivisie'
            }
        } else if ($stateParams.league === 'portugal-primeira') {
            return {
                leagueId: 402,
                leagueLogoPath: 'assets/portugalprimeira.png',
                flagPath: 'assets/portugal.png',
                leagueHeader: "PORTUGAL PRIMEIRA",
                topScorerId: 'adx5ccsw',
                nextTeam: '#/leagues/ligue1',
                previousTeam: '#/leagues/serie-a'
            }
        } else if ($stateParams.league === 'ligue1') {
            return {
                leagueId: 396,
                leagueLogoPath: 'assets/ligue1.png',
                flagPath: 'assets/france.png',
                leagueHeader: "FRANCE LIGUE 1",
                topScorerId: '4j8yjehk',
                nextTeam: '#/leagues/champions-league',
                previousTeam: '#/leagues/portugal-primeira'
            }
        } else if ($stateParams.league === 'champions-league') {
            return {
                leagueId: 405,
                leagueLogoPath: 'assets/champions-league.png',
                flagPath: 'assets/uefa.gif',
                leagueHeader: "UEFA CHAMPIONS LEAGUE",
                topScorerId: 'dirj8dru',
                nextTeam: '#/leagues/epl',
                previousTeam: '#/leagues/ligue1'
            }
        }
    }

});