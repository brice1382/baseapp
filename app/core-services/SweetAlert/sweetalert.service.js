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
                allowOutsideClick: false,
                closeOnConfirm: true
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
