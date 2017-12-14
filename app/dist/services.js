(function () {
    'use strict';

    angular
        .module('core-services', [
            'swal-service',
            'utilities-service',
            'admin-service',
            'upload-service',
            'auth-service'
        ]);
})();

(function () {
    'use strict';

    angular
        .module('admin-service', []);
})();


(function () {
    'use strict';

    angular
        .module('admin-service')
        .service('AdminSvc', AdminSvc);

    AdminSvc.$inject = [];

    function AdminSvc() {

    }
})();


(function () {
    'use strict';

    angular
        .module('auth-service', []);
})();


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


(function () {
    'use strict';

    angular
        .module('goals-service', []);
})();

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

(function () {
    'use strict';

    angular
        .module('swal-service', []);
})();

(function () {
    'use strict';

    angular
        .module('swal-service')
        .service('SwalSvc', SwalSvc);

    SwalSvc.$inject = [];

    function SwalSvc() {

        return {
            ajax: ajax,
            swalInfo: swalInfo,
            swalConfirm: swalConfirm,
            swalWarning: swalWarning,
            swalImage: swalImage,
            swalDelete: swalDelete,
            swalSuccess: swalSuccess
        };

        function swalConfirm() {
            swal({
                title: 'Are You Sure?',
                type: 'warning',
                text: 'Are you sure you want to delete?',
                showConfirmButton: true,
                showCancelButton: true,
                allowOutsideClick: false
            },
            function (isConfirm) {
                if (isConfirm) {

                } else {

                }
            });
        }

        function swalSuccess() {
            swal({
                title: 'Success',
                type: 'success',
                text: 'Completed Action Successfully.',
                showConfirmButton: true,
                showCancelButton: false,
                allowOutsideClick: false,
                closeOnConfirm: true
            });
        }

        function ajax() {
            swal({
                    title: "Ajax request example",
                    text: "Submit to run ajax request",
                    type: "info",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true,
                },
                function(){
                    setTimeout(function(){
                        swal("Ajax request finished!");
                    }, 2000);
                });
        }

        function swalWarning() {
            swal({
                title: 'Are You Sure?',
                type: 'warning',
                text: '',
                showConfirmButton: true,
                showCancelButton: true,
                allowOutsideClick: false,
                closeOnConfirm: true
            });
        }

        function swalInfo() {
            swal({
                title: 'Are You Sure?',
                type: 'info',
                text: 'Are you sure you want to delete?',
                showConfirmButton: true,
                showCancelButton: true,
                allowOutsideClick: false,
                closeOnConfirm: true
            });
        }

        // TODO: Add Custom Image To Alert.
        function swalImage() {
            swal({
                title: "Sweet!",
                text: "Here's a custom image.",
                imageUrl: "images/thumbs-up.jpg"
            });
        }

        /** Delete with callback. */
        function swalDelete() {
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel plx!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm){
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('upload-service', []);
})();


(function () {
    'use strict';

    angular
        .module('upload-service')
        .service('UploadSvc', UploadSvc);

    UploadSvc.$inject = ['$http', '$q'];

    function UploadSvc($http, $q) {


    }
})();


(function () {
    'use strict';

    angular
        .module('utilities-service', []);
})();


(function () {
    'use strict';

    angular
        .module('utilities-service')
        .provider('UtilitiesSvc', function () {

            this.$get = ['$rootScope', function($rootScope) {

                $rootScope.isLoading = false;
                $rootScope.punchedIn = false;

                return {
                    startSpinner: startSpinner,
                    stopSpinner: stopSpinner,
                    isPunchedIn: isPunchedIn,
                    isPunchedOut: isPunchedOut
                };

                function startSpinner() {
                    $rootScope.isLoading = true;
                }

                function stopSpinner() {
                    $rootScope.isLoading = false;
                }

                function isPunchedIn() {
                    $rootScope.punchedIn = true;
                    var punch = 'true';
                    localStorage.setItem('punch', punch);
                }

                function isPunchedOut() {
                    $rootScope.punchedIn = false;
                    var punch = 'false';
                    localStorage.setItem('punch', punch);
                }


            }];
        });
})();

