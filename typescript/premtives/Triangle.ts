import BasePrimtive from "./BasePrimtive.js";

export default class Triangle extends BasePrimtive {
  constructor() {
  super("triangle");
  }

drawShape() {
    if(this.attributes.getProperty("drawBorder") === true){
    this.drawBorder();
    }
this.metal.drawTriangle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("width"),this.attributes.getProperty("height"),this.attributes.getProperty("fillStyle"));    
//this.metal.drawCircle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("radius"));    
}

//---------------------------------------  
  drawBorder() {
   
    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}