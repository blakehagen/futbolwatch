angular.module('waterCoolerFC', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homeTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('league', {
            url: '/leagues/:league',
            templateUrl: 'templates/leagueTemplate.html',
            controller: 'leagueCtrl',
        })

    $urlRouterProvider
        .otherwise('/home');

});