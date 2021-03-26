import BasePrimtive from "./BasePrimtive.js";

export default class Triangle extends BasePrimtive {
  constructor() {     
  super("triangle");
  } 

draw() {
this.metal.drawTriangle(this.attributes);     
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}