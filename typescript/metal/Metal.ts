export default class Metal {

// ctx:Object;
// canvas:object;
// drawRectangle:object;

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
  console.log("ok");
  this.ctx.save();  
this.getCtxValues(attributes);

if (attributes.getProperty("rps") > 0) {
    
  this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
  this.ctx.rotate((attributes.getItem("rotateAngle").value) * Math.PI / 180);
  this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));

}   

this.ctx.fillRect(attributes.getItem("x").value, attributes.getItem("y").value, attributes.getItem("width").value, attributes.getItem("height").value);  
//------------------------------
this.ctx.restore();
}

drawCircle(attributes){
this.ctx.beginPath();
this.ctx.arc(attributes.getProperty("x"),attributes.getProperty("y"), attributes.getProperty("radius"), 0, 2 * Math.PI);
this.ctx.stroke();
}
drawTriangle(attributes){
this.ctx.save();  
  
  this.ctx.fillStyle = attributes.getProperty("backgroundColor");
  this.ctx.beginPath();
  this.ctx.moveTo(attributes.getProperty("x"),attributes.getProperty("y")+attributes.getProperty("height"));
  this.ctx.lineTo(attributes.getProperty("x")+attributes.getProperty("width"),attributes.getProperty("y")+attributes.getProperty("height"));
  this.ctx.lineTo(attributes.getProperty("x")+attributes.getProperty("width")/2,attributes.getProperty("y"));
  this.ctx.fill();

this.ctx.restore();  
}

drawText(attributes){
this.ctx.save();  

this.ctx.fillStyle = attributes.getProperty("backgroundColor");
this.ctx.font = attributes.getProperty("font");

this.ctx.fillText(attributes.getProperty("title"),attributes.getProperty("x"),attributes.getProperty("y"));

this.ctx.restore();
}

private getCtxValues(attributes){

//fillstyle is for internal use dont show it to users
  this.ctx.fillStyle = attributes.getItem("backgroundColor").value;
  this.ctx.strokeStyle = attributes.getItem("strokeStyle").value;
  this.ctx.shadowColor = attributes.getItem("shadowColor").value;
  this.ctx.shadowBlur = attributes.getItem("shadowBlur").value;
  this.ctx.shadowOffsetX = attributes.getItem("shadowOffsetX").value;
  this.ctx.shadowOffsetY = attributes.getItem("shadowOffsetY").value;

}//getAttributes
//////////////////////////classsss-----------------
}