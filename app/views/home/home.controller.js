// TODO: Swap out the usage of $scope and replace it with controllerAs value.
// TODO: Didn't do it at this time as my task is clean up at the moment.
(function () {
    'use strict';

    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$interval', 'SwalSvc', '$document', 'HomeSvc'];

    function HomeCtrl($scope, $interval, SwalSvc, $document, HomeSvc) {
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

        /** $scope.theList = JSON.parse(localStorage.getItem('"Tod o List')); */

        $scope.todoList = [];

        $scope.todoAdd = function () {

            $scope.todoList.push({id: 1, todoText: $scope.todoInput, done: false});
            localStorage.setItem('Todo List', JSON.stringify($scope.todoList));
            $scope.todoInput = "";
        };

        function removeTodos() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function (x) {
                if (!x.done) $scope.todoList.push(x);
            });
        }

        function dontRemove() {
            swal('Not Deleted.');
        }

        vm.removeTodo = function () {
            swal({
                    title: 'Are You Sure?',
                    type: 'warning',
                    text: 'Are you sure you want to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    allowOutsideClick: false
                },
                function (isConfirm) {
                    isConfirm ? removeTodos() : dontRemove();
            });
        };
    }
})();

// TODO: File Instection Done.