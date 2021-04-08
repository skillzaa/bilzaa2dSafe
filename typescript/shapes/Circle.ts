import Shape from "./Shape.js";
import AnimationsCircleFasade from "../animations/animationsCircleFasade.js";

export default class Circle extends Shape {
    
constructor() {
super("circle");
this.animations = new AnimationsCircleFasade();
this.attributes.add({ name: "radius", value: 300, comments: "" });    
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

    this.metal.drawCircle(this.attributes); 
 // }
  
  //------------------------------
  this.metal.restoreCtx();  
//  

}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}