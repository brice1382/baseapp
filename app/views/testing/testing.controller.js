(function () {
    'use strict';

    angular
        .module('testing')
        .controller('TestingCtrl', TestingCtrl);

    TestingCtrl.$inject = ['$scope'];

    function TestingCtrl($scope) {
        var vm = this;

        vm.time = new Date().getTime();

        function hasValue() {
            $scope.hasValue = true;
        }

        function hasNoValue() {
            $scope.hasValue = false;
        }

        vm.convert = function () {
            /** Convert to string to get length. */
            var str = vm.inputDate.toString();
            (str.length != 13) ? (vm.inputDate = vm.inputDate * 1000) : vm.inputDate;
            console.log(vm.inputDate);
            var options = {
                minute: '2-digit',
                hour: '2-digit',
                second: '2-digit',
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
                weekday: 'long'
            };
            vm.convertedDate = new Date(vm.inputDate).toLocaleString('en-US', options);
            vm.inputDate = '';
        };

        vm.getCurrent = function () {
            hasValue();
            vm.currentTime = new Date().getTime();
        };

        vm.clear = function () {
            hasNoValue();
            vm.inputDate = '';
            vm.currentTime = '';
            vm.convertedDate = '';
        };

        var copy = document.getElementById('currentTime');
        var clipboard = new Clipboard(copy);

        clipboard.on('success', function (e) {
            console.log(e);
        });

        clipboard.on('error', function (e) {
            console.log(e);
        })
    }
})();

