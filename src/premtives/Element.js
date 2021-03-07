import Rectangle from './Rectangle.js';
export default class Element{
constructor(){
this.shapes = [];
}
addRectangle(){
    const rectangle = new Rectangle();
    this.shapes.push(rectangle);
    return rectangle;
}


}