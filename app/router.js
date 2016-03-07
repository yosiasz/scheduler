'use strict';
var routerApp = angular.module('schedulerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider
        .otherwise('/');
    
    $stateProvider
            
        .state('home', {
            url: '/Login',
            templateUrl: 'partials/buildings.html'
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
});
/*
var app = angular.module('schedulerApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
//partials are also called views?
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                title: 'Login',
                controller: 'authController',
                templateUrl: '/app/partials/signup.html'
            })
        .when('/home',
            {
                controller: 'authController',
                templateUrl: '/app/partials/login.html'
            })
        .when('/users',
            {
                templateUrl: '/app/partials/users.html'
            })
        .when('/buildings',
            {
                templateUrl: '/app/partials/buildings.html'
            })
        .when('/Rooms',
            {
                controller: 'roomsController',
                templateUrl: '/app/partials/rooms.html'
            })
        .when('/persons',
            {
                controller: 'personsController',
                templateUrl: '/app/partials/persons.html'
            })
            
        .when('/about',
            {
                controller: 'aboutCtrl',
                templateUrl: '/app/partials/about.html'
            })
        .when('/logout', {
            title: 'Logout',
            templateUrl: 'app/partials/logout.html',
            controller: 'logoutCtrl'
        })
        .when('/signup', {
            title: 'Signup',
            templateUrl: 'app/partials/signup.html',
            controller: 'authController'
        })
        .when('/dashboard', {
            title: 'Dashboard',
            templateUrl: 'app/partials/dashboard.html',
            controller: 'authController'
        })    
        .otherwise({ redirectTo: '/' });
})
*/