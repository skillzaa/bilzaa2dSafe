import Rectangle from "./premtives/Rectangle.js";
import PlayHead from "./playHead/PlayHead.js";
import Element from './premtives/Element.js';
import Metal from './metal/Metal.js';
import Animations from './animations/Animations.js';

export default class Bilzaa2d {
constructor() {
    this.playHead = new PlayHead();
   this.element = new Element();
   this.metal = new Metal();
   this.animations = new Animations();
    this.loopAnimation = false;
}
 


play(){
this.playHead.start(); 
this.animationLoop();
}
animationLoop(){
this.metal.clear();    
this.element.shapes.forEach(item => {
            item.setNextFrame();
            item.draw(this.playHead.currentSecond);
        });
window.requestAnimationFrame(this.animationLoop.bind(this));  
}//play
//////////////////////////////////////////////
}//class