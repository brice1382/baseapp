(function () {
    'use strict';

    angular
        .module('goals-service')
        .service('GoalsSvc', GoalsSvc);

    GoalsSvc.$inject = [];

    function GoalsSvc() {
        var sv = this;
    }
})();
