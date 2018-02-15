(function() {
  //Room factory with argument, $firebaseArray
  function Room($firebaseArray) {
    var Room = {};
    //reference to Firebase database. Firebase's child() method being called
    //on an instance of its API object to either query an existing set of data
    //or reference one intended to populate with data in the future
    //$firebaseArray service ensures that data is returned as an array. Child
    //calls children of "rooms" (room1, room2, room3)
    var ref = firebase.database().ref().child("rooms");
    //returns the data as an array
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    //Using AngularFire's $add() on the array created or retrieved with
    //the $firebaseArray service in the data stored rooms variable in the
    //Room service. This gives the application the ability to add rooms to
    //the Firebase database. The Room service method add is taking a room object
    //as an argument. Gives the ability to add rooms to the firebase database.
    Room.add = function(room) {
        //firebase $add method here
        rooms.$add(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
