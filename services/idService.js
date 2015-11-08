angular.module('waterCoolerFC').service('idService', function ($stateParams) {

    this.getLeagueId = function () {
        if ($stateParams.league === 'epl') {
            return {
                leagueId: 398,
                leagueLogoPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Premier_League.svg/300px-Premier_League.svg.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.svg.png',
                leagueHeader: "English Premier League"
            }
        } else if ($stateParams.league === 'spanish-primera') {
            return {
                leagueId: 399,
                leagueLogoPath: 'http://usclubsoccer.org/wp-content/uploads/2015/08/LALIGA_LOGO_V_2015-01COLOR-BLANCO-cropped.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png',
                leagueHeader: "Spanish Primera"
            }
        } else if ($stateParams.league === 'bundesliga') {
            return {
                leagueId: 394,
                leagueLogoPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Bundesliga_logo.svg/637px-Bundesliga_logo.svg.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1000px-Flag_of_Germany.svg.png',
                leagueHeader: "German Bundesliga"
            }
        } else if ($stateParams.league === 'eredivisie') {
            return {
                leagueId: 404,
                leagueLogoPath: 'http://worldsoccertalk.com/wp-content/uploads/2015/04/eredivisie-logo.jpg',
                flagPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/900px-Flag_of_the_Netherlands.svg.png',
                leagueHeader: "Dutch Eredivisie"
            }
        } else if ($stateParams.league === 'serie-a') {
            return {
                leagueId: 401,
                leagueLogoPath: 'https://upload.wikimedia.org/wikipedia/en/f/f7/LegaSerieAlogoTIM.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png',
                leagueHeader: "Italy Serie A"
            }
        } else if ($stateParams.league === 'portugal-primeira') {
            return {
                leagueId: 402,
                leagueLogoPath: 'https://upload.wikimedia.org/wikipedia/en/0/04/Liga_portugal_logo2009.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png',
                leagueHeader: "Portugal Primeira"
            }
        } else if ($stateParams.league === 'ligue1') {
            return {
                leagueId: 396,
                leagueLogoPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Logo_de_la_Ligue_1_%282008%29.svg/364px-Logo_de_la_Ligue_1_%282008%29.svg.png',
                flagPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png',
                leagueHeader: "France Ligue 1"
            }
        }
    }
});