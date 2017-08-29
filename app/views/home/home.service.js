(function () {
    'use strict';

    angular
        .module('home')
        .service('HomeSvc', HomeSvc);

    HomeSvc.$inject = ['$http'];

    function HomeSvc($http) {

        return {
            getList: getList
        };

        function getList() {
            debugger;
            // var things = localStorage.getItem('Todo List');
            return $http.get('/todoList.json').then(function (response) {
                console.log('Response from service ', response);
                return response;
            })
        }
    }
})();
