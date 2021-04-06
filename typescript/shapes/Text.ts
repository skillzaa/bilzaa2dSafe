import Shape from "./Shape.js";

export default class Text extends Shape {
  constructor() {      
    super("text");
    this.attributes.add({name: "title", value: "Text" });
  }

draw() {
   
    this.metal.drawText(this.attributes);
}
  
  //////////////////////////classsss-----------------
}