'use strict';

var app = angular.module('schedulerApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
//partials are also called views?
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                title: 'Login',
                controller: 'authController',
                templateUrl: '/app/partials/login.html'
            })
        .when('/home',
            {
                controller: 'authController',
                templateUrl: '/app/partials/login.html'
            })
        .when('/buildings',
            {
                controller: 'buildingsController',
                templateUrl: '/app/partials/buildings.html'
            })
        .when('/rooms',
            {
                controller: 'roomsController',
                templateUrl: '/app/partials/rooms.html'
            })
        .when('/users',
            {
                controller: 'usersController',
                templateUrl: '/app/partials/users.html'
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
