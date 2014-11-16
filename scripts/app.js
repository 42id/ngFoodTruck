
(function () {
    'use strict';

    var app = angular.module('app', ['ui.router', 'firebase']);

    app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // home <- starting state
        .state('home', {
            url: '/home',
            templateUrl: 'scripts/home/home.html',
            controller: 'home as vm'
        })
    ;
        
});


})();
