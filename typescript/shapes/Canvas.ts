import Shape from "./Shape.js";

export default class Canvas extends Shape {
    
constructor() {
super("canvas");
this.attributes.add({ name: "clearCanvasFlag", value: 1 });  

//this.attributes.add({ name: "radius", value: 300, comments: "" });    
}

draw() {
if(this.attributes.getProperty("clearCanvasFlag")  === 1){
    this.metal.clearCanvas();
}
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}