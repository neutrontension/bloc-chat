(function() {
    function HomeCtrl(Room) {
        HomeCtrl.Rooms = Room.all;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
