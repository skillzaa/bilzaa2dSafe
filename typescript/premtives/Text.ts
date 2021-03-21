import BasePrimtive from "./BasePrimtive.js";

export default class Text extends BasePrimtive {
  constructor() {      
    super("text");
    this.attributes.add({name: "title", value: "Text" });
  }

draw() {
    if(this.attributes.getProperty("drawBorder") === true){
   // this.drawBorder();
    }
    this.metal.drawText(this.attributes.getProperty("title"),this.attributes.getProperty("x"),this.attributes.getProperty("y"));
}
  
  //////////////////////////classsss-----------------
}