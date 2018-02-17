(function() {
    function ModalCtrl(Room, $uibModalInstance) {

      $scope.openModal = function () {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: function ($scope, $uibModalInstance) {
            $scope.ok = function () {
              $uibModalInstance.close();
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }
        })
      };

    }

    angular
        .module('blocChat', 'ui.bootsrap')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
