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
        }).when('/upload', {
            templateUrl: 'views/uploads/upload.template.html',
            controller: 'UploadCtrl',
            controllerAs: 'uc'
        }).when('/time-tracker', {
            templateUrl: 'views/timeTracker/timeTracker.template.html',
            controller: 'TimeTrackerCtrl',
            controllerAs: 'ttc'
        }).when('/contact', {
            templateUrl: 'views/contact/contact.template.html',
            controller: 'ContactCtrl',
            controllerAs: 'cc'
        }).otherwise({redirectTo: '/home'});
    }
})();
