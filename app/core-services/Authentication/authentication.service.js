(function () {
    'use strict';

    angular
        .module('auth-service')
        .service('AuthSvc', AuthSvc);

    AuthSvc.$inject = ['$http', '$rootScope'];

    function AuthSvc($http, $rootScope) {
        var sv = this;

        var service = {
            authenticate: authenticate,
            unauthenticate: unauthenticate
        };

        $rootScope.isAuth = false;

        return service;

        function authenticate(user) {
            return $http.post(user).then(function (response) {
                $rootScope.isAuth = true;
                console.log(response);
            });
        }

        function unauthenticate() {
            $rootScope.isAuth = false;
        }
    }
})();

