(function () {
    'use strict';

    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$interval', 'SwalSvc'];

    function HomeCtrl($scope, $interval, SwalSvc) {
        var vm = this;

        $scope.count = 0;

        vm.reset = function () {
            SwalSvc.swalConfirm();
            $scope.count = 0;
        };

        $scope.Time = new Date().toLocaleString();
        $interval(function() {
            var options = {
                minute: '2-digit',
                hour: '2-digit',
                second: '2-digit'
            };
            $scope.Time = new Date().toLocaleString('en-US', options);
        }, 1000);

        $scope.todoList = [];

        $scope.todoAdd = function () {
            $scope.todoList.push({todoText: $scope.todoInput, done: false});
            $scope.todoInput = "";
        };

        $scope.remove = function () {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function (x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };
    }
})();


