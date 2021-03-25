import PlayHead from "./single/PlayHead.js";
import Elements from './premtives/Elements.js';
import Animations from './fasades/Animations.js';
import Premades from './premade/Premades.js';
export default class Bilzaa2d {
    constructor() {
        this.premades = new Premades();
        this.playHead = new PlayHead();
        this.elements = new Elements();
        this.animations = new Animations();
    }
    play() {
        // try{
        this.playHead.play();
        this.gameLoop();
        //   } catch (err) {
        //       return "some error occured";
        //   } 
    } //play
    gameLoop() {
        if (this.elements.shapes.length < 1) {
            return;
        }
        //first element of the frame being drawn has to clear the canvas    
        this.elements.shapes[0].clearCanvasFlag = true;
        //----------the main loop
        this.elements.shapes.forEach(item => {
            const curSec = this.playHead.runningTime();
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
        window.requestAnimationFrame(this.gameLoop.bind(this));
    } //play
} //class
