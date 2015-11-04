angular.module('futbolApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/homeTmpl.html',
            controller: 'homeCtrl'
        })

    $urlRouterProvider
        .otherwise('/home');






});