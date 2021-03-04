
export default class Painter {

constructor(canvasName = "bilzaaCanvas") {
    this.canvas = document.getElementById("bilzaaCanvas");
    this.ctx = this.canvas.getContext('2d');
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;    
}
//....................
clearCanvas(){
this.ctx.fillStyle = "#f5ecc3";
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
}//fn
//////////////////////////classsss-----------------
}