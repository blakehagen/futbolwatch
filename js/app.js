angular.module('futbolApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'homeTmpl.html',
            controller: 'homeCtrl'
        })






});