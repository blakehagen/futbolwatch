angular.module('futbolApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homeTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('epl', {
            url: '/epl',
            templateUrl: 'templates/eplTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('bundesliga', {
            url: '/bundesliga',
            templateUrl: 'templates/bundesligaTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('spanishPrimera', {
            url: '/spanish-primera',
            templateUrl: 'templates/spanishPrimeraTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('serieA', {
            url: '/serie-a',
            templateUrl: 'templates/serieATmpl.html',
            controller: 'leagueCtrl'
        })

        .state('ligue1', {
            url: '/ligue1',
            templateUrl: 'templates/ligue1Tmpl.html',
            controller: 'leagueCtrl'
        })

        .state('portugalPrimeira', {
            url: '/portugal-primeira',
            templateUrl: 'templates/portugalPrimeiraTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('eredivisie', {
            url: '/eredivisie',
            templateUrl: 'templates/eredivisieTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('championsLeague', {
            url: '/champions-league',
            templateUrl: 'templates/championsLeagueTmpl.html',
            controller: 'leagueCtrl'
        })


    $urlRouterProvider
        .otherwise('/home');






});