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

        vm.testtest = function (test) {
            HomeSvc.getList().then(function (response) {
                var Response = [];
                console.log('The response ', response.data);
                $scope.theList = response.data;
                var test = response.data;
                Response.push(test);
                for (var i = 0; i <= test.length; i++) {
                    var str = test[i].isDone.toString();
                    (str != 4) ? $scope.notClassy = 'doneClass' : $scope.notClassy = '';
                    console.log(test[i].isDone);
                    // if (test[i].isDone === false) {
                    //     $scope.classy = true;
                    //     console.log('worked');
                    // } else {
                    //     $scope.notClassy = true;
                    //     console.log('didnt work');
                    // }
                }
            });

        };

        // $scope.$on('$viewContentLoaded', function () {
        //     var g = localStorage.getItem('Todo List');
        //     var list = JSON.parse(g);
        //     for (var i = 0; i <= list.length; i++) {
        //         var flag = list[i].done;
        //         console.log('This value', flag);
        //         if (flag === false) {
        //             var td = $document[0].getElementById('id').innerHTML;
        //             console.log(td);
        //
        //         } else {
        //             var tdt = document.getElementsByClassName('td');
        //             var clt = document.createAttribute('class');
        //             clt.value = 'doneClass';
        //             tdt.setAttributeNode(clt);
        //         }
        //     }
        // });

        $scope.todoList = [];

        $scope.todoAdd = function () {

            $scope.todoList.push({id: 1, todoText: $scope.todoInput, done: false});
            localStorage.setItem('Todo List', JSON.stringify($scope.todoList));
            $scope.todoInput = "";
        };


        function removeTodo() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function (x) {
                if (!x.done) $scope.todoList.push(x);
            });
        }

        function dontRemove() {
            swal('Not Deleted.');
        }

        vm.remove = function () {
            swal({
                    title: 'Are You Sure?',
                    type: 'warning',
                    text: 'Are you sure you want to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    allowOutsideClick: false
                },
                function (isConfirm) {
                    isConfirm ? removeTodo() : dontRemove();
                });

        };
    }
})();

