angular.module('waterCoolerFC', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('league', {
            url: '/leagues/:league',
            templateUrl: 'templates/mainTmpl.html',
            controller: 'leagueCtrl',
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/aboutTemplate.html',
            controller: 'leagueCtrl',
        })

    $urlRouterProvider
        .otherwise('/leagues/epl');
});