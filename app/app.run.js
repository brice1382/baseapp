(function () {
    'use strict';

    angular
        .module('spire')
        .run(run);

    run.$inject = ['$rootScope', '$http', '$interval', 'UtilitiesSvc'];

    function run($rootScope, $http, $interval, UtilitiesSvc) {
        var checkOnRefresh = function () {
            if (localStorage.getItem('punch') === 'true') {
                $rootScope.punchedIn = true;
            }
        };

        $rootScope.$on('$viewContentLoaded', function () {
            if (location.hash.includes('home')) {
                document.title = 'Spire | Home';
            } else {
                if (location.hash.includes('about')) {
                    document.title = 'Spire | About';
                } else {
                    if (location.hash.includes('contact')) {
                        document.title = 'Spire | Contact';
                    } else {
                        if (location.hash.includes('testing')) {
                            document.title = 'Spire | Testing'
                        }
                    }
                }
            }

            checkOnRefresh();

            $rootScope.UtilitiesSvc = UtilitiesSvc;

            var options = {
                weekday: 'long'
            };
            $rootScope.today = 'Happy ' + new Date().toLocaleString('en-US', options) + '!!!';

            $interval(function() {
                var options = {
                    minute: '2-digit',
                    hour: '2-digit',
                    second: '2-digit',
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                    weekday: 'long'
                };
                $rootScope.Time = new Date().toLocaleString('en-US', options);
            }, 1000);
        })
    }
})();
