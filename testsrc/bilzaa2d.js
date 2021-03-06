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
    this.playState = true;
    this.startTime = null; //wil only be null before first run 
    //this.currentSecond = 0;  //?? it shd be a function
    //this.currentFrame = 0;   //?? it shd be a function
    this.animationDuration = 60;
    //this.pauseFlag = true; -- not requ now
    this.pausedAtTime = null;    
}

start(startPaused=false){
this.setState(true,this.getTime(),null);
this.nextFrame(); // this will start the loop
return true;
}//start 
pause(){ 
this.setState(false,this.startTime,this.getTime());
}
resume(){
this.setState(true,this.pausedAtTime,null);
}
setState(playState,startTime, pausedAtTime){
this.startTime = startTime;
    
}
rewind(){return true;}
foreward(){return true;}
nextFrame(){
    if(this.pauseFlag === false && this.startTime !== null){
        this.currentFrame = this.currentFrame+1;
        window.requestAnimationFrame(this.nextFrame.bind(this));  
        return this.currentFrame;
    }else {
        window.requestAnimationFrame(this.nextFrame.bind(this));  
        return false;
    }
}
currentFrame(){
    if(this.startTime == null){return 0;}
    if(this.pause === true){
        const diff = this.getTime() - this.pausedAtTime;
        return diff/16; //if there are 60fps then 1sec = 1000 ms
    }else {
        const diff = this.getTime() - this.startTime;
        return diff/16; //if there are 60fps then 1sec = 1000 ms
    }
}
currentSecond(){
    const d = new Date();
    const now = d.getTime();

    const diffFromStart = now - this.startTime;
    console.log("getCurrentSecond",diffFromStart);
    this.currentSecond =  (diffFromStart / 1000);
    return this.currentSecond;
}
getTime(){
    const d = new Date();
    return d.getTime();
}
//////////////////////////classsss-----------------
}

/**This object has 4 states
 * first start : when the object start for the first time. it will always start in start-paused state and if the user want to start it in non-paused state then the user has to do it manually. "first start" will only begin when startTime is null. once it is made non null then it can be made null only when stopped. when stopped it returns to first-start-paused phase   
 * 
 */

class PlayHead {
constructor(animationDuration=20) {
    this.playState = false;
    this.currentSecond = 0;//?? null ??
    this.secBeginTime = 0;
    this.animationDuration = animationDuration; 
    this.gameLoopHandle = null;  
}

stop(){
    this.playState = false;
    this.currentSecond = 0;
    this.secBeginTime = null;
    window.cancelAnimationFrame(this.gameLoopHandle);
}
start(){
    this.playState = true;
    this.currentSecond = 0;
    this.secBeginTime = this.getTime();
    this.gameLoop();
}
gameLoop(){
this.gameLoopHandle = window.requestAnimationFrame(this.gameLoop.bind(this));    
if(this.playState === false){return false;}
this.calcCurrentSecond();  
}
calcCurrentSecond(){
let calculations = this.currentSecond;    
const timeNow = this.getTime();    
    const diffBwNowAndSecBeginTime = timeNow -  this.secBeginTime;   
        const factor = (diffBwNowAndSecBeginTime/1000).toFixed(2);
        calculations = this.currentSecond += parseFloat(factor);
        this.secBeginTime = timeNow;
if(calculations > this.animationDuration){
    calculations = this.animationDuration;
}        
//finally
this.currentSecond = calculations;        
return this.currentSecond;        
}

pause(){
    this.playState = false;
}
resume(){
    this.playState = true;
    this.secBeginTime = this.getTime();
}
getTime(){
    const d = new Date();
    return d.getTime();
}
//////////////////////////classsss-----------------
}

class Bilzaa2d {
constructor(canvasName = "bilzaaCanvas") {
    this.timer = new Timer();
    this.playHead = new PlayHead();
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
