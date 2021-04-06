import Rectangle from '../primtives/Rectangle.js';
import Circle from '../primtives/Circle.js';
import Ellipse from '../primtives/Ellipse.js';
import Triangle from '../primtives/Triangle.js';
import Text from '../primtives/Text.js';
import Complex from '../primtives/Complex.js';
export default class Elements {
    shapes: [];
    constructor();
    addRectangle(): Rectangle;
    addComplex(): Complex;
    addCircle(): Circle;
    addEllipse(): Ellipse;
    addText(): Text;
    addTriangle(): Triangle;
    addSimpleRectangle(): any;
}
