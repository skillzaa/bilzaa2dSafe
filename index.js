import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
bilzaa2d.playHead.animationDuration = 10;
console.log(bilzaa2d.playHead.start());

document.addEventListener("click", function(){
    console.log(bilzaa2d.playHead);
  });

  document.addEventListener('keydown', logKey);

function logKey(e) {
 const key = e.key;
switch (key) {
    case "x": //stop
    bilzaa2d.playHead.stop()
        break;
    case "p": //pause
    bilzaa2d.playHead.pause()
        break;
    case "r": //Resume
    bilzaa2d.playHead.resume()
        break;
    case "s": //first start
    bilzaa2d.playHead.start()
        break;

    default:
        break;
}

}

setInterval(() => {
   console.log(`current second : ${bilzaa2d.playHead.currentSecond}`) 
}, 1000);