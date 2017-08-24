(function () {
    'use strict';

    angular
        .module('utilities-service')
        .service('UtilitiesSvc', UtilitiesSvc);

    UtilitiesSvc.$inject = [];

    function UtilitiesSvc() {
        var sv = this;

        $rootScope.isLoading = false;

        return {
            startSpinner: startSpinner,
            stopSpinner: stopSpinner
        };

        function startSpinner() {
            $rootScope.isLoading = true;
        }

        function stopSpinner() {
            $rootScope.isLoading = false;
        }
    }
})();

