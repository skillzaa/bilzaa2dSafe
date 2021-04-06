import Rectangle from '../shapes/Rectangle.js';
import Circle from '../shapes/Circle.js';
import Ellipse from '../shapes/Ellipse.js';
import Triangle from '../shapes/Triangle.js';
import Text from '../shapes/Text.js';
import Complex from '../shapes/Complex.js';
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
