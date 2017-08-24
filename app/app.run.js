(function () {
    'use strict';

    angular
        .module('spire')
        .run(run);

    run.$inject = ['$rootScope', '$http'];

    function run($rootScope, $http) {
        // function getValue() {
        //     return $http.get('https://www.braintrustgit.com/api/v2/Temp/getValue').then(function (response) {
        //         console.log(response.data);
        //         $rootScope.metaTest = response.data;
        //     })
        // }
        // getValue();

        $rootScope.$on('$viewContentLoaded', function () {
            if (location.hash.includes('home')) {
                document.title = 'Spire | Home';
            } else {
                if (location.hash.includes('about')) {
                    document.title = 'Spire | About';
                } else {
                    if (location.hash.includes('contact')) {
                        document.title = 'Spire | Contact';
                    }
                }
            }

            var options = {
                weekday: 'long'
            };
            $rootScope.today = 'Happy ' + new Date().toLocaleString('en-US', options) + '!!!';
        })
    }
})();
