import Elements from './fasades/Elements.js';
import Animations from './fasades/Animations.js';
import Shapes from './fasades/Shapes.js';
import Premades from './premade/Premades.js';
/**This is from ubuntu......!!! */
export default class Bilzaa2d {
    private playHead;
    premades: Premades;
    elements: Elements;
    animations: Animations;
    shapes: Shapes;
    constructor();
    play(): void;
    gameLoop(): void;
    drawShapes(): void;
}
