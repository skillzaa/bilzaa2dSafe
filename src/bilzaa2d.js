import Rectangle from "./premtives/Rectangle.js";
import Painter from "./painter/Painter.js";
import Timer from "./Timer.js";

export default class Bilzaa2d {
constructor(canvasName = "bilzaaCanvas") {
    this.painter = new Painter(canvasName);
    this.timer = new Timer();
    this.itemsCollection = [];
    this.loopAnimation = false;
}
 
addRectangle(){
    const rectangle = new Rectangle(this.painter.ctx);
    this.itemsCollection.push(rectangle);
    return rectangle;
}

play(){
this.timer.start();    
this.frameFunction(); //first time run this fn wo requestAni..Frame
}//play

frameFunction(){
this.painter.clearCanvas();
this.itemsCollection.forEach(item => {
            //this.timer.incrementFrame();
            item.draw(this.timer.getCurrentFrame());
        });
window.requestAnimationFrame(this.play.bind(this));  
console.log("Current Second",this.timer.getCurrentSecond());  
}
//------------------------

//////////////////////////////////////////////
}//class