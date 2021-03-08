import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {

constructor() {
    super();    
}

drawShape(){
    //set ctx to basic data
    this.ctx.fillStyle      = this.getBD("fillStyle").value;
    this.ctx.strokeStyle    = this.getBD("strokeStyle").value;
    this.ctx.shadowColor    = this.getBD("shadowColor").value;
    this.ctx.shadowBlur     = this.getBD("shadowBlur").value;
    this.ctx.shadowOffsetX  = this.getBD("shadowOffsetX").value;
    this.ctx.shadowOffsetY  = this.getBD("shadowOffsetY").value;
    
    this.ctx.fillRect(this.getBD("x").value,this.getBD("y").value,this.getBD("width").value,this.getBD("height").value);
//--the draw function
}

drawBorder(){
this.drawRectangleBorder(this.getBD("x").value ,this.getBD("y").value ,this.getBD("width").value,this.getBD("height").value,this.getBD("borderColor").value,this.getBD("borderWidth").value );
}   
//////////////////////////classsss-----------------
}