import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {

constructor(ctx) {
    super(ctx);    
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