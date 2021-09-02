var n = document.querySelectorAll("button").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var key=this.className;
 makeSound(key);
 makeAnimation(key);
  });
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
  makeSound(key);
  makeAnimation(key)
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "g":
      var kick = new Audio("kick.mp3");
      kick.play();
      break;
    case "h":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "j":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "k":
      var ho = new Audio("ho.mp3");
      ho.play();
      break;
    case "l":
      var hc = new Audio("hc.mp3");
      hc.play();
      break;
    default:console.log(key);
  }
}
function makeAnimation(key)
{
  var key1="."+key;
  document.querySelector(key1).classList.add("pressed");
  setTimeout(function(){
   document.querySelector(key1).classList.remove("pressed");
  },100);

}
