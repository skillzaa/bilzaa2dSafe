export default class ElementBase{

constructor(ctx) {
    this.move = [];
    this.ctx = ctx;
    this.x = 20;
    this.y = 20;
    this.fromX;
    this.fromY;
    this.toX;
    this.toY;
    this.startTime;
    this.endTime;  
    this.animationDuration =0;  
    this.currentAnimationFrame =0;
    this.deltaX = 0;  
    this.deltaY = 0;  

    this.height = 100;
    this.width = 200;
}


draw(currentSecond){
const seq = this.getCurrentSequence(currentSecond);
console.log("seq",seq);
  

 this.x = this.x + seq.deltaX;
this.y = this.y + seq.deltaY;
 
//var cx     = this.x + 0.5 * this.width;   // x of shape center
//var cy     = this.y + 0.5 * this.height;  // y of shape center

this.ctx.fillStyle = "#ff0000";
this.ctx.fillRect(this.x, this.y, this.width, this.height);  //draw normal shape

//this.ctx.translate(cx, cy);              //translate to center of shape
this.ctx.rotate( (Math.PI / 180) * 25);  //rotate 25 degrees.
//this.ctx.translate(-cx, -cy);            //translate center back to 0,0

// this.ctx.fillStyle = "#0000ff";
// this.ctx.fillRect(this.x, this.y, this.width, this.height);  //draw normal shape
}//fn

addMove(fromX,fromY,toX,toY,startTime,endTime){
    const moveSeq = {};
moveSeq.x = fromX;
moveSeq.y = fromY;
    moveSeq.toX = toX;
    moveSeq.toY = toY;

moveSeq.startTime = startTime;
moveSeq.endTime = endTime;
moveSeq.animationDuration  = endTime - startTime ; 

    moveSeq.deltaX = ( (toX - fromX) / moveSeq.animationDuration );         
    moveSeq.deltaY = ( (toY - fromY) / moveSeq.animationDuration );         

    //this.currentAnimationFrame =0; 
this.move.push(moveSeq);    
     console.log(this.move);
}//fn

getCurrentSequence(currentSecond){

    for (let x = 0; x < this.move.length; x++) {
    
    if(this.move[x].startTime < currentSecond && this.move[x].endTime > currentSecond ){
        return this.move[x];  
    }
}//for ends
}//getCurrentSequence

//////////////////////////classsss-----------------
}