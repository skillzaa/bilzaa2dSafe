import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

const a = bilzaa2d.addRectangle();
const b = bilzaa2d.addRectangle();
a.draw();
b.basicData.x=200;
b.basicData.y=200;
b.draw();
// bilzaa2d.play();
// bilzaa2d.playHead.start();
// document.addEventListener("click", function(){
//     console.log(bilzaa2d.playHead);
//   });

// bilzaa2d.playHead.start();
//   setInterval(() => {
//       console.log("bilzaa2d.playHead.currentSecond",bilzaa2d.playHead.currentSecond);
//   }, 200);