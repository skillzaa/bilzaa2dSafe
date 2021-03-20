import PlayHead from "./playHead/PlayHead.js";
import Element from './premtives/Element.js';
import Animations from './animations/Animations.js';
import Premades from './premade/Premades.js';
export default class Bilzaa2d {
    constructor() {
        this.premades = new Premades();
        this.playHead = new PlayHead();
        this.element = new Element();
        this.animations = new Animations();
    }
    play() {
        this.playHead.play();
        this.gameLoop();
    }
    gameLoop() {
        //first element of the frame being drawn has to clear the canvas    
        this.element.shapes[0].clearCanvas = true;
        //----------the main loop
        this.element.shapes.forEach(item => {
            const curSec = this.playHead.runningTime();
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
        window.requestAnimationFrame(this.gameLoop.bind(this));
    } //play
    addElement() {
    }
} //class
