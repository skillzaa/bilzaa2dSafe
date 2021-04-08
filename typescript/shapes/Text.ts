import Shape from "./Shape.js";
import AnimationsTextFasade from "../animations/animationsTextFasade.js";

export default class Text extends Shape {
  constructor() {      
    super("text");  
    this.animations = new AnimationsTextFasade();
    this.attributes.add({name: "title", value: "Text" });
  this.attributes.add({ name: "color", value: "red" });  
    
  this.attributes.add({ name: "fontSize", value: 22 });  
  this.attributes.add({ name: "fontFamily", value: "Arial" });  

  }

draw() {
  this.metal.saveCtx();  
  this.metal.getCtxValues(this.attributes);
  
  //if (this.attributes.getProperty("currentRotateAngle") > 0) {
      
   this.metal.translateCanvas(this.attributes);
   
   this.metal.rotateCanvas(this.attributes);
  
   this.metal.unTranslateCanvas(this.attributes);
  //}   
  
  //--------------draw rect-- if visible
 // if ((this.attributes.getProperty("transparent") === false)  ) {

    this.metal.drawText(this.attributes);
 // }
  
  //------------------------------
  this.metal.restoreCtx();  
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
   //VVVVVV
  
}
  
  //////////////////////////classsss-----------------
}