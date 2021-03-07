import Rectangle from "./premtives/Rectangle.js";
import PlayHead from "./playHead/PlayHead.js";
import Painter from "./painter/Painter.js";

export default class Bilzaa2d {
constructor(canvasName = "bilzaaCanvas") {
    this.playHead = new PlayHead();
    this.painter = new Painter();
    this.itemsCollection = [];
    this.loopAnimation = false;
}
 
addRectangle(){
    const rectangle = new Rectangle();
    this.itemsCollection.push(rectangle);
    return rectangle;
}

play(){
this.playHead.start(); 
setInterval(() => {
    console.log("this.playHead.currentSecond",this.playHead.currentSecond);    
}, 2000);
//this.frameFunction(); //first time run this fn wo requestAni..Frame
}//play

frameFunction(){
this.painter.clearCanvas();
//this.itemsCollection.forEach(item => {
            //item.draw(this.playHead.getCurrentSecond());
console.log("this.playHead.currentSecond",this.playHead);
 //       });
window.requestAnimationFrame(this.play.bind(this));  
//console.log("Current Second",this.timer.getCurrentSecond());  
}
//------------------------

//////////////////////////////////////////////
}//class