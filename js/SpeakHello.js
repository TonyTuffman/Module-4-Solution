
(function (window) {
var helloSpeaker = {};
helloSpeaker.speak = names[name];


var speakWord = "Hello";


helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);

