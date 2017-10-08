var user = "Petya";
var visitorLogIn = function() {
  var time = new Date();
  var currHours = time.getHours();
  var currMinutes = time.getMinutes();
    console.log(user + " logged in the site at " + currHours + ":" + currMinutes + ".");
};

var visitorPlaying = function() {
  var time = new Date();
  var currHours = time.getHours() +1;
  var currMinutes = time.getMinutes();
    console.log(user + " started to play at " + currHours + ":" + currMinutes + ".");
};

var visitorLogOut = function() {
  var time = new Date();
  var currHours = time.getHours() + 2;
  var currMinutes = time.getMinutes();
    console.log(user + " logged out the site at " + currHours + ":" + currMinutes + ".");
};

var event = require('events');
var eventEmitter  = new event.EventEmitter();

eventEmitter.on('logIn', visitorLogIn);
eventEmitter.on('playing', visitorPlaying);
eventEmitter.on('logOut', visitorLogOut);

eventEmitter.emit('logIn');
eventEmitter.emit('playing');
eventEmitter.emit('logOut');























