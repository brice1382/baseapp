(function () {
    'use strict';

    angular
        .module('contact')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$http'];

    function ContactCtrl($http) {
        // TODO: Im preparing to make an http call right here and will need to move that portion to the service.
    }
})();

// TODO: File Instection Done.