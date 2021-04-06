import Shape from "./Shape.js";

export default class Triangle extends Shape {
  constructor() {     
  super("triangle");
  } 

draw() {
this.metal.drawTriangle(this.attributes);     
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}