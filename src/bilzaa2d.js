import Element from "./Element.js";

const canvas = document.getElementById("crown");
const ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;    
let currentSecond = 0;
const element = new Element(ctx);

//element.addMove(100,100,600,100,0,100); //rotate----
element.addMove(10,10,500,10,1,10); //top line
element.addMove(500,10,500,500,11,20); // right line
element.addMove(500,500,10,500,21,30); //bottom line
element.addMove(10,500,10,10,31,40); // left line
/////////////////////////////////////////////////////////
setInterval(function(){
    clearCanvas();
    element.draw(currentSecond++);
    
},100);
/////////////////////////////////////////////////////////
function clearCanvas(){
    ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    ctx.fillRect(0,0,canvas.width,canvas.height)
}//fn


