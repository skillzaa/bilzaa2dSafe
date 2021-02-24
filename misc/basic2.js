const canvas = document.getElementById("crown");
const ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;    
let currentRotateValue = 0;

 

setInterval(() => {
    
    animate();
}, 500);


function animate(){
//    clearCanvas();

ctx.save();
ctx.translate(200, 75);

currentRotateValue = currentRotateValue + (1 * Math.PI / 180);
ctx.rotate(currentRotateValue);
ctx.fillRect(100, 100, 100, 50);
//ctx.translate(0, 0);
ctx.restore(); 
}//animate

function clearCanvas(){
    ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    ctx.fillRect(0,0,canvas.width,canvas.height)
}//fn