import Rectangle from './Rectangle.js';
import SimpleRectangle from './SimpleRectangle.js';
export default class Element{
constructor(){
this.shapes = [];
}
addRectangle(){
    const rectangle = new Rectangle();
    this.shapes.push(rectangle);
    return rectangle;
}
addSimpleRectangle(){
    const simpleRectangle = new SimpleRectangle();
    this.shapes.push(simpleRectangle);
    return simpleRectangle;
}


}