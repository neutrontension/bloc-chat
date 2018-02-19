(function() {
    function HomeCtrl(Room) {
        HomeCtrl.rooms = Room.all;
    }

    angular
        .module('blocChat')
        //The .module() call does not have a second argument or array of
        //dependencies because they've been set in app.js, so the already-
        //defined module only needs to be retrieved and not initialized
        .controller('HomeCtrl', ['Room', HomeCtrl]);
        //A .controller() method has two parameters:
        //1. The name of the controller.
        //2. A callback function OR an array that injects dependencies,
        //with a callback function as the last item in the array.
        //The callback function executes when the controller is initialized
        //.controller() must be called on an Angular module
})();
