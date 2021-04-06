import Shape from '../shapes/Shape.js';
import Rectangle from '../shapes/Rectangle.js';
import Triangle from '../shapes/Triangle.js';
import Circle from '../shapes/Circle.js';
import Text from '../shapes/Text.js';
import Canvas from '../shapes/Canvas.js';


export default class Shapes {

    data:Shape[];
    constructor() {
        this.data = [];
    }
    addRectangle() {
       const rectangle = new Rectangle();
        this.data.push(rectangle);
        return rectangle;
    }
    addCanvas() {
       const canvas = new Canvas();
        this.data.push(canvas);
        return canvas;
    }
    addTriangle() {
        const triangle = new Triangle();
        this.data.push(triangle);
        return triangle;
    }
    // addComplex() {
    //     const complex = new Complex();
    //     this.data.push(complex);
    //     return complex;
    // }
    addCircle() {
        const circle = new Circle();
        this.data.push(circle);
        return circle;
    }
    // addEllipse() {
    //     const ellipse = new Ellipse();
    //     this.data.push(ellipse);
    //     return ellipse;
    // }
    addText() {
        const text = new Text();
        this.data.push(text);
        return text;
    }
   
}
