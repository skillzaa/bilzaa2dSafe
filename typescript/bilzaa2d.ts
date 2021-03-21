import PlayHead from "./playHead/PlayHead.js";
import Elements from './premtives/Elements.js';
import Animations from './animations/Animations.js';
import Premades from './premade/Premades.js';

export default class Bilzaa2d {
    private    playHead:PlayHead;
public     premades:Premades;
public    elements:Elements;
public    animations:Animations;    
constructor() {
    this.premades = new Premades();
    this.playHead = new PlayHead();
   this.elements = new Elements();
   this.animations = new Animations();
}
play(){
this.playHead.play(); 
this.gameLoop();
}
gameLoop(){    
//first element of the frame being drawn has to clear the canvas    
 this.elements.shapes[0].clearCanvasFlag = true;
//----------the main loop
this.elements.shapes.forEach(item => {
    const curSec = this.playHead.runningTime();
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
window.requestAnimationFrame(this.gameLoop.bind(this));  
}//play

//////////////////////////////////////////////
}//class