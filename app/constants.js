(function () {
    'use strict';

    angular
        .module('spire')
        .constant('ENV_CONFIG', {
            domains: {
                development: ['localhost', 'test.spire-web.com'],
                production: ['www.spire-web.com', 'spire-web.com', 'prod.spire-web.com']
            },
            vars: {
                development: {
                    apiUrl: 'https://spire-web.com/api/'
                },
                production: {
                    apiUrl: 'https://spire-web.com/api/'
                }
            }
        })
})();

