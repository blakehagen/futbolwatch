angular.module('waterCoolerFC', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('league', {
            url: '/leagues/:league',
            templateUrl: '/templates/mainTmpl.html',
            controller: 'leagueCtrl',
        })

        .state('info', {
            url: '/info',
            templateUrl: '/templates/infoTemplate.html',
            controller: 'leagueCtrl',
        })

    $urlRouterProvider
        .otherwise('/leagues/epl');
});