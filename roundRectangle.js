const canvas = document.getElementById("crown");
const ctx = canvas.getContext('2d');
 
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;    
 
ctx.fillStyle = "#f5ecc3";
//clear the canvas
ctx.fillRect(0,0,canvas.width,canvas.height)
 
ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect(20, 20, 150, 100);
ctx.stroke();