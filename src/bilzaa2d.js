import Element from "./premtives/Element.js";

export default class Bilzaa2d {
    constructor(canvasName = "bilzaaCanvas") {
        this.canvas = document.getElementById("bilzaaCanvas");
        this.ctx = this.canvas.getContext('2d');
        this.itemsCollection = [];
        this.ctx.canvas.width  = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;    
        this.currentSecond = 0;
        
     
        
    }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
 clearCanvas(){
    this.ctx.fillStyle = "#f5ecc3";
    //clear the canvas
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
}//fn

 addItem(){
    const element = new Element(this.ctx);
    this.itemsCollection.push(element);
    return element;
}
play(){
    setInterval(()=>{
        this.clearCanvas();
    this.itemsCollection.forEach(item => {
            item.draw(this.currentSecond++); //important this.currentSecond++
        });
    },100);
}//play
//////////////////////////////////////////////
}//class