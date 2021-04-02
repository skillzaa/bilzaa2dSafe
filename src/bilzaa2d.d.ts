import Elements from './fasades/Elements.js';
import Animations from './fasades/Animations.js';
import Premades from './premade/Premades.js';
export default class Bilzaa2d {
    private playHead;
    premades: Premades;
    elements: Elements;
    animations: Animations;
    constructor();
    play(): void;
    gameLoop(): void;
}
