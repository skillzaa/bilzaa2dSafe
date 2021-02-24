import ElementBase from "./ElementBase.js";

export default class Rotate extends ElementBase{

constructor(ctx) {
    super(ctx);
    
}


addRotate(fromX,fromY,toX,toY,startTime,endTime){
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


//////////////////////////classsss-----------------
}