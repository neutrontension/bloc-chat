(function() {
    function ModalCtrl() {


    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
