import Rectangle from './Rectangle.js';
import SimpleRectangle from './SimpleRectangle.js';
import Circle from './Circle.js';
import Triangle from './Triangle.js';
export default class Element{
constructor(){
this.shapes = [];
}
addRectangle(){
    const rectangle = new Rectangle();
    this.shapes.push(rectangle);
    return rectangle;
}
addCircle(){
    const circle = new Circle();
    this.shapes.push(circle);
    return circle;
}
addTriangle(){
    const triangle = new Triangle();
    this.shapes.push(triangle);
    return triangle;
}
addSimpleRectangle(){
    const simpleRectangle = new SimpleRectangle();
    this.shapes.push(simpleRectangle);
    return simpleRectangle;
}


}