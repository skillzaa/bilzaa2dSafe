
export default class Metal {

constructor() {
 this.load();
}
//....................
load(canvasName = "bilzaaCanvas"){
    
    try {
        this.canvas = document.getElementById(canvasName);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width  = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;    
      }
      catch(err) {
        return false;
      }
}
//....................
clear(){
this.ctx.fillStyle = "#f5ecc3";
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
}//fn
clearCanvas(fillStyle = "#e9f7f2"){
this.ctx.fillStyle = fillStyle;
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
}//fn

drawRectangle(attributes){
  this.ctx.fillStyle = attributes.getItem("fillStyle").value;
  this.ctx.strokeStyle = attributes.getItem("strokeStyle").value;
  this.ctx.shadowColor = attributes.getItem("shadowColor").value;
  this.ctx.shadowBlur = attributes.getItem("shadowBlur").value;
  this.ctx.shadowOffsetX = attributes.getItem("shadowOffsetX").value;
  this.ctx.shadowOffsetY = attributes.getItem("shadowOffsetY").value;
  if (attributes.getProperty("rps") > 0) {
    this.ctx.save();
    this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
    this.ctx.rotate((attributes.getItem("rotateAngle").value) * Math.PI / 180);
    this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));

  }

  this.ctx.fillRect(attributes.getItem("x").value, attributes.getItem("y").value, attributes.getItem("width").value, attributes.getItem("height").value);

  if (attributes.getProperty("rps") > 0) {
    this.ctx.restore();
  }
}
drawRectangleBorder(attributes)
{
  // this.ctx.save();
  // this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
  // this.ctx.rotate((attributes.getItem("rotateAngle").value) * Math.PI / 180);
  // this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));
  // this.ctx.restore();

  // //----------------------------------------------------
  // this.ctx.fillStyle= fillStyle;
  // this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
  // this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
}


drawCircle(x,y,radius){
  this.ctx.beginPath();
this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
this.ctx.stroke();
}
drawTriangle(x,y,width,height,fillStyle){
  this.ctx.fillStyle = fillStyle;
  this.ctx.beginPath();
  this.ctx.moveTo(x,y+height);
  this.ctx.lineTo(x+width,y+height);
  this.ctx.lineTo(x+width/2,y);
  this.ctx.fill();
}

drawText(title,x,y){
this.ctx.fillStyle = "red";
this.ctx.font = "20px Georgia";
this.ctx.fillText(title, x, y);
}
//////////////////////////classsss-----------------
}