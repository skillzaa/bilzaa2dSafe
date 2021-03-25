import BasePrimtive from "./BasePrimtive.js";

export default class SimpleRectangle extends BasePrimtive {
  constructor() {
  
    super("simpleRectangle");
  }

  draw() {
this.metal.drawRectangle(this.attributes);    
  
  }
 
  //////////////////////////classsss-----------------
}