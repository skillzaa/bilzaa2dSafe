// canvas references & canvas styling
var canvas=document.createElement("canvas");
canvas.style.border='1px solid red';
document.body.appendChild(canvas);
canvas.width=378;
canvas.height=256;
var ctx=canvas.getContext("2d");
ctx.fillStyle='green';
ctx.globalAlpha=0.35;        

let rotateValue = 0;//......................



setInterval(() => {
   clearCanvas();
    animate();
}, 1000);



function animate(){
// define a rectangle to rotate
var rect={ x:100, y:100, width:175, height:50 };
ctx.fillStyle = "red";
// draw the rectangle unrotated
//ctx.fillRect( rect.x, rect.y, rect.width, rect.height );

// The main meat
ctx.translate( rect.x+rect.width/2, rect.y+rect.height/2 );
rotateValue = rotateValue + (1 * Math.PI / 180);
ctx.rotate( rotateValue  );
ctx.translate( -rect.x-rect.width/2, -rect.y-rect.height/2 );

ctx.fillRect( rect.x, rect.y, rect.width, rect.height );

}//..fn

function clearCanvas(){
    ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    ctx.fillRect(0,0,canvas.width,canvas.height)
}//fn