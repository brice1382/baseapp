(function () {
    'use strict';

    angular
        .module('spire')
        .config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.template.html',
            controller: 'HomeCtrl',
            controllerAs: 'hc'
        }).when('/about', {
            templateUrl: 'views/about/about.template.html',
            controller: 'AboutCtrl',
            controllerAs: 'ac'
        }).when('/testing', {
            templateUrl: 'views/testing/testing.template.html',
            controller: 'TestingCtrl',
            controllerAs: 'tc'
        }).when('/contact', {
            templateUrl: 'views/contact/contact.template.html',
            controller: 'ContactCtrl',
            controllerAs: 'cc'
        }).otherwise({redirectTo: '/home'});
    }
})();
