(function () {
    'use strict';

    angular
        .module('views', [
            'home',
            'about',
            'contact',
            'testing'
        ]);
})();

(function () {
    'use strict';

    angular
        .module('about', ['ngRoute']);
})();


(function () {
    'use strict';

    angular
        .module('contact', ['ngRoute']);
})();


(function () {
    'use strict';

    angular
        .module('home', ['ngRoute']);
})();


(function () {
    'use strict';

    angular
        .module('testing', ['ngRoute']);
})();


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


(function () {
    'use strict';

    angular
        .module('contact')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = [];

    function ContactCtrl() {

    }
})();


(function () {
    'use strict';

    angular
        .module('contact')
        .service('ContactSvc', ContactSvc);

    ContactSvc.$inject = ['$http'];

    function ContactSvc($http) {

    }
})();


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

        // $scope.theList = JSON.parse(localStorage.getItem('Todo List'));

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

