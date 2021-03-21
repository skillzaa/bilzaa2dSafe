import BasePrimtive from "./BasePrimtive.js";

export default class Circle extends BasePrimtive {

constructor() {
super("circle");
this.attributes.add({ name: "radius", value: 100, comments: "" });    
}

drawShape() {
    if(this.attributes.getProperty("drawBorder") === true){
    this.drawBorder();
    }
this.metal.drawCircle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("radius"));    
}

//---------------------------------------  
  drawBorder() {
    this.metal.drawCircle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("radius")+10)  
    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}