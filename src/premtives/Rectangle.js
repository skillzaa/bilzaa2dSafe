import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {
constructor() {
  const attribData = [
    { name : "x",  value : 100, comments:"The X location"},
    { name : "y",  value :100,comments:"The Y location"},
    { name : "width",  value : 100, comments:""},
    { name : "drawBorder",  value  : true, comments:""},
    { name : "borderColor",  value  : "red", comments:""},
    { name : "borderWidth",  value  : 10, comments:""},
    { name : "height",  value : 50, comments:""},
    { name : "rotateClockwise",  value : true, comments:"t/f"},
    { name : "rotateAngle",  value : 0, comments:"the angle at which the obj is currently rotated"},
    { name : "rps",  value : 10, comments:"stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle"},
    { name : "fillStyle",  value : "green", comments:""},
    { name : "strokeStyle",  value : "#F0000", comments:""},
    { name : "shadowColor",  value : "blue", comments:""},
    { name : "shadowBlur",  value : 0, comments:""},
    { name : "shadowOffsetX",  value : 0, comments:""},
    { name : "shadowOffsetY",  value : 0, comments:""},
    ];
  const name = "Rectangle";  
    super(name , attribData);    
}

drawShape(){


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