import Element from "./Element.js";

const canvas = document.getElementById("crown");
const ctx = canvas.getContext('2d');
const itemsCollection = [];
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;    
let currentSecond = 0;
const element = addItem();
const e2 = addItem();

//element.addMove(100,100,600,100,0,100); //rotate----
element.addMove(10,10,500,10,1,20); //top line
element.addMove(500,10,500,500,20,40); // right line
element.addMove(500,500,10,500,40,60); //bottom line
element.addMove(10,500,10,10,60,80); // left line
/////////////////////////////////////////////////////////
e2.addMove(100,500,500,500,1,20); //top line
e2.addMove(500,500,100,500,20,40); // right line
e2.addMove(100,500,500,500,40,60); //bottom line
e2.addMove(500,500,100,500,60,80); // left line
/////////////////////////////////////////////////////////
setInterval(function(){
clearCanvas();
    itemsCollection.forEach(item => {
        item.draw(currentSecond++);
    });
},100);
/////////////////////////////////////////////////////////
function clearCanvas(){
    ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    ctx.fillRect(0,0,canvas.width,canvas.height)
}//fn

function addItem(){
    const element = new Element(ctx);
    itemsCollection.push(element);
    return element;
}
