(function () {
    'use strict';

    angular
        .module('contact')
        .service('ContactSvc', ContactSvc);

    ContactSvc.$inject = ['$http'];

    function ContactSvc($http) {

    }
})();
