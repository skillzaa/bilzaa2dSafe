import PlayHead from "./playHead/PlayHead.js";
import Element from './premtives/Element.js';
import Animations from './animations/Animations.js';

export default class Bilzaa2d {
constructor() {
    this.playHead = new PlayHead();
   this.element = new Element();
   this.animations = new Animations();
}
play(){
this.playHead.start(); 
this.animationLoop();
}
animationLoop(){
//first element of the frame being drawn has to clear the canvas    
 this.element.shapes[0].clearCanvas = true;

this.element.shapes.forEach(item => {
            item.setNextFrame();
            item.draw(this.playHead.currentSecond);
        });
window.requestAnimationFrame(this.animationLoop.bind(this));  
}//play
//////////////////////////////////////////////
}//class