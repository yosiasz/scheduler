'use strict';
var routerApp = angular.module('schedulerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider
        .otherwise('/');
    
    $stateProvider
            
        .state('home', {
            url: '/Home',
            templateUrl: 'partials/signup.html'
        })
                .state('login', {
            url: '/Login',
            templateUrl: 'partials/login.html'
        })

        .state('users', {
            url: '/Users',
            templateUrl: 'partials/users.html'
        })

        .state('rooms', {
            url: '/Rooms',
            templateUrl: 'partials/rooms.html'
        })

        .state('buildings', {
            url: '/Buildings',
            templateUrl: 'partials/buildings.html'
        })

        .state('about', {
            url: '/About',
            templateUrl: 'partials/about.html'
        })
});