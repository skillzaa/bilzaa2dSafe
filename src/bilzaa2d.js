import Rectangle from "./premtives/Rectangle.js";
import Painter from "./painter/Painter.js";

export default class Bilzaa2d {
    constructor(canvasName = "bilzaaCanvas") {
     
        this.painter = new Painter(canvasName);
        this.itemsCollection = [];
        this.currentSecond = 0;  
        this.currentFrame = 0;  
        this.pauseFlag = false; 
        this.loopAnimation = false;
    }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
 
addRectangle(){
    const rectangle = new Rectangle(this.painter.ctx);
    this.itemsCollection.push(rectangle);
    return rectangle;
}

play(){
if (this.pauseFlag === true){return;}    
 //   setInterval(()=>{
        this.painter.clearCanvas();
    this.itemsCollection.forEach(item => {

            item.draw(this.currentSecond++); //important this.currentSecond++
        });
 //   },100);
window.requestAnimationFrame(this.play.bind(this));    
}//play

start(){this.pauseFlag = false;}//start = recontinue ofter pause
stop(){this.currentSecond = 0;}
pause(){
    if (this.pauseFlag===true){
        this.pauseFlag=false;
    }else {
        this.pauseFlag=true
    }   
}
//------------------------
getCurrentSecond(){
    var d = new Date();
    const now = d.getTime();
    
}
//////////////////////////////////////////////
}//class