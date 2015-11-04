angular.module('futbolApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homeTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('epl', {
            url: '/englishPremierLeague',
            templateUrl: 'templates/eplTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('spanishPrimera', {
            url: '/spanishPrimera',
            templateUrl: 'templates/spanishPrimeraTmpl.html',
            controller: 'leagueCtrl'
        })

    $urlRouterProvider
        .otherwise('/home');






});