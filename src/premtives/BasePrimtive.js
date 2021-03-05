export default class BasePrimtive{

constructor(ctx) {
    this.sequences = [];
    this.ctx = ctx;
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

draw(){}

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