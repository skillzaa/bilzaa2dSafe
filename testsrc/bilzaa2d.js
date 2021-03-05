'use strict';

class BasePrimtive{

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

class Rectangle extends BasePrimtive {

constructor(ctx) {
    super(ctx);
    this.fromX=0;
    this.fromY=0;
    this.toX=0;
    this.toY=0;
    
}
draw(currentFrame){
    const seq = this.getCurrentSequenceByFrame(currentFrame);
    
    if(seq === undefined || seq === null){return;}
    
    this.x = this.x + seq.deltaXPerFrame;
    this.y = this.y + seq.deltaYPerFrame;
    
    console.log(`X : ${this.x} Y: ${this.y} CurrentFrame: ${currentFrame}`); 
    
    this.ctx.fillStyle = "#ff0000";
    
    ///////////////////////////////////////////////////
    this.ctx.save();
this.ctx.translate( this.x+this.width/2, this.y+this.height/2 );
//const rotationalConstant = 10 * Math.PI / 180;

//this.rotateValue = this.rotateValue * rotationalConstant; 
//this.rotateValue = this.rotateValue + 0.9; 
this.rotateSpeed = this.rotateSpeed +1;
this.ctx.rotate( (Math.PI /180 )* this.rotateSpeed );
this.ctx.translate( - (this.x+this.width/2), -(this.y+this.height/2 ));
this.ctx.fillRect(this.x, this.y, this.width, this.height);  //draw normal shape
this.ctx.restore();
//this.ctx.setTransform(1, 0, 0, 1, 0, 0);

}//fn
//...............
addMove(fromX,fromY,toX,toY,startTime,endTime){
const moveSeq = {};
moveSeq.x = fromX;
moveSeq.toX = toX;
moveSeq.y = fromY;
moveSeq.toY = toY;

moveSeq.startTime = startTime;
moveSeq.endTime = endTime;
moveSeq.animationDuration  = endTime - startTime ; 

moveSeq.deltaX = ( (toX - fromX) / moveSeq.animationDuration );         
moveSeq.deltaY = ( (toY - fromY) / moveSeq.animationDuration );         
moveSeq.deltaXPerFrame = Math.ceil(moveSeq.deltaX /60);
moveSeq.deltaYPerFrame = Math.ceil(moveSeq.deltaY /60);

    
this.sequences.push(moveSeq);    
    
}//fn
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

class Timer {

constructor() {
    this.startTime = null; //wil only be null before first run 
    this.currentSecond = 0;  
    this.currentFrame = 0; 
    this.pauseFlag = false; 
    this.pausedAt = 0;    
}

start(){
this.pauseFlag = false;
const d = new Date();
this.startTime = d.getTime();
this.incrementFrame();
return true;
}//start = recontinue ofter pause


stop(){this.currentSecond = 0;}
pause(){
    if (this.pauseFlag===true){
        this.pauseFlag=false;
    }else {
        this.pauseFlag=true;
    }   
}

incrementFrame(){
    if(this.pauseFlag === false){
        this.currentFrame = this.currentFrame+1;
        window.requestAnimationFrame(this.incrementFrame.bind(this));  
        return this.currentFrame;
    }else {
        window.requestAnimationFrame(this.incrementFrame.bind(this));  
        return false;
    }
}
getCurrentFrame(){
    return this.currentFrame;
}
getCurrentSecond(){
    const d = new Date();
    const now = d.getTime();

    const diffFromStart = now - this.startTime;
    console.log("getCurrentSecond",diffFromStart);
    this.currentSecond =  (diffFromStart / 1000);
    return this.currentSecond;
}
//////////////////////////classsss-----------------
}

class Bilzaa2d {
constructor(canvasName = "bilzaaCanvas") {
    this.timer = new Timer();
    this.itemsCollection = [];
    this.loopAnimation = false;
}
 
addRectangle(){
    const rectangle = new Rectangle(this.painter.ctx);
    this.itemsCollection.push(rectangle);
    return rectangle;
}

play(){
this.timer.start();    
this.frameFunction(); //first time run this fn wo requestAni..Frame
}//play

frameFunction(){
this.painter.clearCanvas();
this.itemsCollection.forEach(item => {
            //this.timer.incrementFrame();
            item.draw(this.timer.getCurrentFrame());
        });
window.requestAnimationFrame(this.play.bind(this));  
console.log("Current Second",this.timer.getCurrentSecond());  
}
//------------------------

//////////////////////////////////////////////
}//class

module.exports = Bilzaa2d;
