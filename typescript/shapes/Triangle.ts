import Shape from "./Shape.js";

export default class Triangle extends Shape {
  constructor() {     
  super("triangle");
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
  if ((this.attributes.getProperty("transparent") === false)  ) {

  this.metal.drawTriangle(this.attributes); 
  }
  
  //------------------------------
  this.metal.restoreCtx();  
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv  
    
}

//---------------------------------------  
 
  //////////////////////////classsss-----------------
}