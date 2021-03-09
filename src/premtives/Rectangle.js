import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {

constructor() {
    super();    
}

drawShape(){
if(this.getBD("rps").value > 0 ){console.log("Rotating.shape..",this.getBD("rotateAngle").value);}

    this.ctx.fillStyle      = this.getBD("fillStyle").value;
    this.ctx.strokeStyle    = this.getBD("strokeStyle").value;
    this.ctx.shadowColor    = this.getBD("shadowColor").value;
    this.ctx.shadowBlur     = this.getBD("shadowBlur").value;
    this.ctx.shadowOffsetX  = this.getBD("shadowOffsetX").value;
    this.ctx.shadowOffsetY  = this.getBD("shadowOffsetY").value;
    if(this.getBDVal("rps") > 0){
        this.ctx.save();
        this.ctx.translate(this.getBD("x").value + (this.getBD("width").value/2), this.getBD("y").value + (this.getBD("height").value/2));
        this.ctx.rotate((this.getBD("rotateAngle").value) * Math.PI / 180);
        this.ctx.translate(-(this.getBD("x").value + (this.getBD("width").value/2)), -(this.getBD("y").value + (this.getBD("height").value/2)));
      
      }
    
    this.ctx.fillRect(this.getBD("x").value,this.getBD("y").value,this.getBD("width").value,this.getBD("height").value);

    if(this.getBDVal("rps") > 0){
        this.ctx.restore();
    }
//--the draw function
}

drawBorder(){
  //if(this.getBDVal("rps") > 0){console.log("totating border");}
  if(this.getBDVal("rps") > 0){
    this.ctx.save();
    this.ctx.translate(this.getBD("x").value + (this.getBD("width").value/2), this.getBD("y").value + (this.getBD("height").value/2));
    this.ctx.rotate((this.getBD("rotateAngle").value) * Math.PI / 180);
    this.ctx.translate(-(this.getBD("x").value + (this.getBD("width").value/2)), -(this.getBD("y").value + (this.getBD("height").value/2)));
  
  }
    
    this.drawRectangleBorder(this.getBD("x").value ,this.getBD("y").value ,this.getBD("width").value,this.getBD("height").value,this.getBD("borderColor").value,this.getBD("borderWidth").value );
    if(this.getBDVal("rps") > 0){
        this.ctx.restore();
    }
   
//----------------------------    
}//--draw border   
//////////////////////////classsss-----------------
}