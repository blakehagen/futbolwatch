angular.module('waterCoolerFC').service('idService', function ($stateParams) {
    this.getLeagueId = function () {
        if ($stateParams.league === 'epl') {
            return {
                leagueIdKimono: 'dv41vq9a',
                leagueId: 398,
                leagueLogoPath: './assets/optimized/epl-compressor.png',
                leagueHeader: "ENGLISH PREMIER LEAGUE",
                topScorerId: 'ce15ltey',
                nextTeam: '#/leagues/spanish-primera',
                previousTeam: '#/leagues/usa-mls'
            }
        } else if ($stateParams.league === 'spanish-primera') {
            return {
                leagueIdKimono: 'abq5nqls',
                leagueId: 399,
                leagueLogoPath: './assets/optimized/laliga-compressor.png',
                leagueHeader: "SPANISH PRIMERA",
                topScorerId: 'daaqk8d0',
                nextTeam: '#/leagues/bundesliga',
                previousTeam: '#/leagues/epl'
            }
        } else if ($stateParams.league === 'bundesliga') {
            return {
                leagueIdKimono: '379n3ymy',
                leagueId: 394,
                leagueLogoPath: './assets/optimized/bundesliga-compressor.png',
                leagueHeader: "GERMAN BUNDESLIGA",
                topScorerId: '3vb8ywkg',
                nextTeam: '#/leagues/eredivisie',
                previousTeam: '#/leagues/spanish-primera'
            }
        } else if ($stateParams.league === 'eredivisie') {
            return {
                leagueIdKimono: 'adu2wboi',
                leagueId: 404,
                leagueLogoPath: './assets/optimized/eredivisie-compressor.png',
                leagueHeader: "DUTCH EREDIVISIE",
                topScorerId: 'a71bgaeg',
                nextTeam: '#/leagues/serie-a',
                previousTeam: '#/leagues/bundesliga'
            }
        } else if ($stateParams.league === 'serie-a') {
            return {
                leagueIdKimono: 'ejr3kwbo',
                leagueId: 401,
                leagueLogoPath: './assets/optimized/serie-a.png',
                leagueHeader: "ITALY SERIE A",
                topScorerId: 'dp2cqh4g',
                nextTeam: '#/leagues/portugal-primeira',
                previousTeam: '#/leagues/eredivisie'
            }
        } else if ($stateParams.league === 'portugal-primeira') {
            return {
                leagueIdKimono: '40dxlnkq',
                leagueId: 402,
                leagueLogoPath: './assets/optimized/portugal-compressor.png',
                leagueHeader: "PORTUGAL PRIMEIRA",
                topScorerId: 'adx5ccsw',
                nextTeam: '#/leagues/ligue1',
                previousTeam: '#/leagues/serie-a'
            }
        } else if ($stateParams.league === 'ligue1') {
            return {
                leagueIdKimono: 'a20ppviy',
                leagueId: 396,
                leagueLogoPath: './assets/optimized/ligue1-compressor.png',
                leagueHeader: "FRANCE LIGUE 1",
                topScorerId: '4j8yjehk',
                nextTeam: '#/leagues/champions-league',
                previousTeam: '#/leagues/portugal-primeira'
            }
        } else if ($stateParams.league === 'champions-league') {
            return {
                leagueId: 405,
                leagueLogoPath: './assets/optimized/champions-league-compressor.png',
                leagueHeader: "UEFA CHAMPIONS LEAGUE",
                topScorerId: 'dirj8dru',
                nextTeam: '#/leagues/epl',
                previousTeam: '#/leagues/ligue1'
            }
        }
    }
});