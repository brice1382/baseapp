(function () {
    'use strict';

    angular
        .module('time-tracker')
        .controller('TimeTrackerCtrl', TimeTrackerCtrl);

    TimeTrackerCtrl.$inject = ['UtilitiesSvc'];

    function TimeTrackerCtrl(UtilitiesSvc) {
        var vm = this;

        vm.getSome = function () {
            vm.hh = new Date().getHours();
        };

        vm.punchIn = function (inTime) {
            inTime = new Date().getTime();
            localStorage.setItem('inTime', inTime);
            UtilitiesSvc.isPunchedIn();
            vm.inTime = localStorage.getItem('inTime');
        };

        vm.punchOut = function (outTime) {
            outTime = new Date().getTime();
            localStorage.setItem('outTime', outTime);
            UtilitiesSvc.isPunchedOut();
            vm.outTime = localStorage.getItem('outTime');
        };

        vm.getHours = function (totalTime) {
            var inTime = localStorage.getItem('inTime');
            var outTime = localStorage.getItem('outTime');
            var saves = "".concat('Punch In Time: ' + inTime.toString() + '\r\n',
                'Punch Out Time: ' + outTime.toString());
            localStorage.setItem('daily punches', JSON.stringify({ PunchIn: inTime, PunchOut: outTime}));
            console.log(saves);
            totalTime = Math.abs((outTime - inTime) / 1000) / (60 * 60);
            vm.hours = totalTime * 60;
        }
    }
})();
// TODO: File Instection Done.
