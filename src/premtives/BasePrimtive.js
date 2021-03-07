import Metal from "../metal/Metal.js";

export default class BasePrimtive  extends Metal{

constructor() {
    super();
    this.sequences = [];
    this.x = 0;
    this.y = 0;
    this.startTime;
    this.endTime;  
    this.animationDuration =0;  
    
    this.rotateSpeed = 1;
    this.deltaX = 0;  
    this.deltaY = 0;  

    this.height = 20;
    this.width = 40;
}


addMove(fromX,fromY,toX,toY,startTime,endTime){
const seq = {};
seq.fromX = fromX;
seq.toX = toX;
seq.fromY = fromY;
seq.toY = toY;

seq.startTime = startTime;
seq.endTime = endTime;
seq.seqDuration  = endTime - startTime ; 

seq.deltaX = ( (toX - fromX) / seq.seqDuration );         
seq.deltaY = ( (toY - fromY) / seq.seqDuration );         
this.sequences.push(seq);    
    
}//fn
getCurrentSequence(currentSecond){

    for (let x = 0; x < this.sequences.length; x++) {
    
    if(this.sequences[x].startTime < currentSecond && this.sequences[x].endTime > currentSecond ){
        return this.sequences[x];  
    }
}//for ends
return null; //final value if no found
}//getCurrentSequence
getCurrentSequenceByFrame(currentFrame){

    for (let x = 0; x < this.sequences.length; x++) {
    
    if(this.sequences[x].startFrame < currentFrame && this.sequences[x].endFrame > currentFrame ){
        return this.sequences[x];  
    }
}//for ends
return null; //final value if no found
}//getCurrentSequence


//////////////////////////classsss-----------------
}