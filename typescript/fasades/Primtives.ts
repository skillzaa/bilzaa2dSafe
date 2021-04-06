//import Primtive from '../primtives/Primtive.js';
import Rectangle from '../primtives/Rectangle.js';

export default class Primtives {
    constructor() {
        this.shapes = [];
    }
    addRectangle() {
       const rectangle = new Rectangle();
        this.shapes.push(rectangle);
        return rectangle;
    }
    // addComplex() {
    //     const complex = new Complex();
    //     this.shapes.push(complex);
    //     return complex;
    // }
    // addCircle() {
    //     const circle = new Circle();
    //     this.shapes.push(circle);
    //     return circle;
    // }
    // addEllipse() {
    //     const ellipse = new Ellipse();
    //     this.shapes.push(ellipse);
    //     return ellipse;
    // }
    // addText() {
    //     const text = new Text();
    //     this.shapes.push(text);
    //     return text;
    // }
    // addTriangle() {
    //     const triangle = new Triangle();
    //     this.shapes.push(triangle);
    //     return triangle;
    // }
    // addSimpleRectangle() {
    //     const simpleRectangle = new SimpleRectangle();
    //     this.shapes.push(simpleRectangle);
    //     return simpleRectangle;
    // }
}
