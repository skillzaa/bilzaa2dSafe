import Shape from "./Shape.js";

export default class Circle extends Shape {
    
constructor() {
super("circle");
this.attributes.add({ name: "radius", value: 300, comments: "" });    
}

draw() {
this.metal.drawCircle(this.attributes); 
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}