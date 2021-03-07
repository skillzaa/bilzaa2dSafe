import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

const a = bilzaa2d.addRectangle();
const b = bilzaa2d.addRectangle();
a.addMove(10,10,200,200,1,15);
b.addMove(10,10,200,200,15,20);
bilzaa2d.play();
// bilzaa2d.play();
// bilzaa2d.playHead.start();
// document.addEventListener("click", function(){
//     console.log(bilzaa2d.playHead);
//   });

// bilzaa2d.playHead.start();
//   setInterval(() => {
//       console.log("bilzaa2d.playHead.currentSecond",bilzaa2d.playHead.currentSecond);
//   }, 200);