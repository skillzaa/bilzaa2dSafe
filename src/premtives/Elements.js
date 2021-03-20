import Rectangle from './Rectangle.js';
import SimpleRectangle from './SimpleRectangle.js';
import Circle from './Circle.js';
import Triangle from './Triangle.js';
import Text from './Text.js';
import Complex from './Complex.js';
export default class Elements {
    constructor() {
        this.shapes = [];
    }
    addRectangle() {
        const rectangle = new Rectangle();
        this.shapes.push(rectangle);
        return rectangle;
    }
    addComplex() {
        const complex = new Complex();
        this.shapes.push(complex);
        return complex;
    }
    addCircle() {
        const circle = new Circle();
        this.shapes.push(circle);
        return circle;
    }
    addText() {
        const text = new Text();
        this.shapes.push(text);
        return text;
    }
    addTriangle() {
        const triangle = new Triangle();
        this.shapes.push(triangle);
        return triangle;
    }
    addSimpleRectangle() {
        const simpleRectangle = new SimpleRectangle();
        this.shapes.push(simpleRectangle);
        return simpleRectangle;
    }
}
