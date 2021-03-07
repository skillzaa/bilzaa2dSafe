import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {

constructor(ctx) {
    super(ctx);
    this.fromX=0;
    this.fromY=0;
    this.toX=0;
    this.toY=0;
    
}
draw(currentSecond){
    const seq = this.getCurrentSequence(currentSecond);
    
    if(seq === undefined || seq === null){return false;}
    
    this.x = this.x + seq.deltaX;
    this.y = this.y + seq.deltaY;
    
  //  console.log(`X : ${this.x} Y: ${this.y} currentSecond: ${currentSecond}`); 
    
    this.ctx.fillStyle = "#ff0000";
    
    ///////////////////////////////////////////////////
 //   this.ctx.save();
//this.ctx.translate( this.x+this.width/2, this.y+this.height/2 );
//const rotationalConstant = 10 * Math.PI / 180;

//this.rotateValue = this.rotateValue * rotationalConstant; 
//this.rotateValue = this.rotateValue + 0.9; 
//this.rotateSpeed = this.rotateSpeed +1;
//this.ctx.rotate( (Math.PI /180 )* this.rotateSpeed );
//this.ctx.translate( - (this.x+this.width/2), -(this.y+this.height/2 ));
this.ctx.fillRect(this.x, this.y, this.width, this.height);  //draw normal shape
//this.ctx.restore();
//this.ctx.setTransform(1, 0, 0, 1, 0, 0);

}//fn
//...............

addMoveByFrames(fromX,fromY,toX,toY,startTime,endTime){
const moveSeq = {};
moveSeq.x = fromX;
moveSeq.toX = toX;
moveSeq.y = fromY;
moveSeq.toY = toY;

moveSeq.startTime = startTime;
moveSeq.endTime = endTime;
moveSeq.startFrame = startTime * 60;
moveSeq.endFrame = endTime * 60 ;

moveSeq.animationDuration  = endTime - startTime ; 
moveSeq.animationDurationFrame  = moveSeq.endFrame - moveSeq.startFrame ; 

moveSeq.deltaX = ( (toX - fromX) / moveSeq.animationDuration );         
moveSeq.deltaY = ( (toY - fromY) / moveSeq.animationDuration );         
moveSeq.deltaXPerFrame = ( (toX - fromX) / moveSeq.animationDurationFrame );
moveSeq.deltaYPerFrame = (( (toY - fromY) / moveSeq.animationDurationFrame ));

    //this.currentAnimationFrame =0; 
this.sequences.push(moveSeq);    

}
addRotate(speed,startTime,endTime){
const moveSeq = {};
moveSeq.rotateSpeed = speed;

moveSeq.startTime = startTime;
moveSeq.endTime = endTime;
moveSeq.startFrame = startTime * 60;
moveSeq.endFrame = endTime * 60 ;

moveSeq.animationDuration  = endTime - startTime ; 
moveSeq.animationDurationFrame  = moveSeq.endFrame - moveSeq.startFrame ; 


this.sequences.push(moveSeq);    

}

    
//////////////////////////classsss-----------------
}