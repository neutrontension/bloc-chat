(function() {
    function HomeCtrl(Room) {
        HomeCtrl.Rooms = Room.all;
        console.log(Room.all);
    }
        console.log(Room.all);
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
