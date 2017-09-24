(function () {
    'use strict';

    angular
        .module('utilities-service')
        .provider('UtilitiesSvc', function () {

            this.$get = ['$rootScope', function($rootScope) {

                $rootScope.isLoading = false;
                $rootScope.punchedIn = false;

                return {
                    startSpinner: startSpinner,
                    stopSpinner: stopSpinner,
                    isPunchedIn: isPunchedIn,
                    isPunchedOut: isPunchedOut
                };

                function startSpinner() {
                    $rootScope.isLoading = true;
                }

                function stopSpinner() {
                    $rootScope.isLoading = false;
                }

                function isPunchedIn() {
                    $rootScope.punchedIn = true;
                    var punch = 'true';
                    localStorage.setItem('punch', punch);
                }

                function isPunchedOut() {
                    $rootScope.punchedIn = false;
                    var punch = 'false';
                    localStorage.setItem('punch', punch);
                }


            }];
        });
})();

