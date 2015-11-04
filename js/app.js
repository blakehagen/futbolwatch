angular.module('futbolApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })

    $urlRouterProvider
        .otherwise('/home');






});