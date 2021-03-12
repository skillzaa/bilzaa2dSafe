
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
clearCanvas(){
this.ctx.fillStyle = "#f5ecc3";
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
}//fn

drawRectangle(x=10,y=10,width=100,height = 100){
    this.ctx.fillStyle = "red";
this.ctx.fillRect(x, y, width, height)
const diff = 150
this.ctx.strokeRect(x+50, y+50, width, height)
}
drawRectangleBorder(x, y, width, height, fillStyle='#000',thickness = 1)
{
  this.ctx.fillStyle= fillStyle;
  this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
  this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
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