import Element from "./Element.js";

const canvas = document.getElementById("crown");
const ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;    

const element = new Element(ctx);
element.animate(10,10,500,500,1,60);
/////////////////////////////////////////////////////////
setInterval(function(){
    clearCanvas();
    element.draw();
    
},100);
/////////////////////////////////////////////////////////
function clearCanvas(){
    ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    ctx.fillRect(0,0,canvas.width,canvas.height)
}//fn


