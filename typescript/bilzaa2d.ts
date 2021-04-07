import PlayHead from "./single/PlayHead.js";
import Animations from './animations/AnimationsFasade.js';
import Shapes from './fasades/Shapes.js';
import Premades from './premade/Premades.js';
/**This is from ubuntu......!!! */
export default class Bilzaa2d  {
private    playHead:PlayHead;
public     premades:Premades;    
  
public    shapes:Shapes;    
constructor() {
    this.premades = new Premades();
    this.playHead = new PlayHead();

   this.shapes = new Shapes();
}
play(){ // this method has the main try catch block
  // try{   
        this.playHead.play(); 
        this.gameLoop();
 //   } catch (err) {
 //       return "some error occured";
 //   } 
}//play

gameLoop(){    
if (this.shapes.data.length < 1) {return;}    
//first element of the frame being drawn has to clear the canvas    
 this.shapes.data[0].clearCanvasFlag = true;
//----------the main loop
this.shapes.data.forEach(item => {
    const curSec = this.playHead.runningTime();
            item.update(curSec);
            item.preDraw();
            item.draw();
            item.postDraw();
        });
window.requestAnimationFrame(this.gameLoop.bind(this));  
}//play

drawShapes(){    
//----------the main loop
    this.shapes.data.forEach(item => {
        item.draw();
            });
    }//play
    
//////////////////////////////////////////////
}//class