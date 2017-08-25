(function () {
    'use strict';

    angular
        .module('about')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope', '$routeParams', 'GoalService'];

    function AboutCtrl($scope, $routeParams, GoalService) {
        var vm = this;

        vm.regexp = function () {
            FlashManager.random();
        };

        vm.goals = GoalService.query();
        vm.orderProp = 'id';

        $scope.spacer = '\t\t';

        vm.hubs = [
            {Id: 1, value: 'https://github.com/brice1382/projectSP'},
            {Id: 2, value: 'https://github.com/brice1382/DotNetAPI'}
        ];

        vm.gitHub = function () {
            var select = vm.select;
            var newWindow = window.open('https://github.com/brice1382/projectSP', "_blank", "toolbar=no,scrollbars=no,top=0,left=500,resizable=yes,width=1000,height=800");
        };

        $scope.tasks = [
            {Id: 1, value: 'Move into mobile development.'},
            {Id: 2, value: 'Gain the knowledge to be able to mentor younger developers.'},
            {Id: 3, value: 'Use my knowledge of development to help impact my community in a positive way.'}
        ];

        /**
         * As this got larger I would separate it out into their own JSON files. For now here is faster to
         * implement and easier to do.
         */
        $scope.docs = [
            {
                id: 1,
                value: 'docPDFs/ProdResume.pdf',
                link: 'assets/ProdResume.pdf',
                linkTitle: 'View/Download',
                icon: 'https://png.icons8.com/pdf/color/48',
                icon2: 'fa fa-user',
                title: 'Brandon Rice | Web Developer | Resume',
                helper: 'References available upon request'
            }
        ];

        $scope.refs = [
            {
                id: 1,
                value: 'docPDFs/EF_CheatSheet.pdf',
                link: 'assets/EF_CheatSheet.pdf',
                linkTitle: 'EF_CheatSheet',
                icon: 'https://png.icons8.com/pdf/color/48',
                icon2: 'fa fa-file',
                title: 'Entity Framework Cheat Sheet',
                helper: 'Great reference from the good folks at www.EntityFrameworkTutorial.com'
            },
            {
                id: 2,
                value: 'docPDFs/RestFlow.jpg',
                link: 'assets/RestFlow.jpg',
                linkTitle: 'RestFlowVisual',
                icon: 'https://png.icons8.com/jpg/color/48',
                icon2: 'fa fa-file-image-o',
                title: 'C Sharp Rest Flow',
                helper: 'My visual reference of data flow using .NET'
            }
        ];

        $scope.certs = [
            {
                licenseNum: 1014-888170,
                certName: 'HTML Fundamentals',
                completed: 'April 2016',
                certImg: 'assets/HTML.jpg'
            },
            {
                licenseNum: 1014-888170,
                certName: 'HTML Fundamentals',
                completed: 'April 2016',
                certImg: 'assets/HTML.jpg'},
            {
                licenseNum: 1014-888170,
                certName: 'HTML Fundamentals',
                completed: 'April 2016',
                certImg: 'assets/HTML.jpg'
            },
            {
                licenseNum: 1014-888170,
                certName: 'HTML Fundamentals',
                completed: 'April 2016',
                certImg: 'assets/HTML.jpg'
            },
            {
                licenseNum: 1014-888170,
                certName: 'HTML Fundamentals',
                completed: 'April 2016',
                certImg: 'assets/HTML.jpg'
            }
        ];
    }

})();

