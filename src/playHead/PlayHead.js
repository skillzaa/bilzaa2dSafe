export default class PlayHead {
constructor(animationDuration=300,fps=60) {
    this.playState = false;
    this.currentSecond = 0;//?? null ??
    this.secBeginTime = 0;
    this.fpsMs = fps/1000;//incomming fps is in seconds we converted it to mili seconds
    this.animationDuration = animationDuration; 
    this.gameLoopHandle = null;  
}

stop(){
    this.playState = false;
    this.currentSecond = 0;
    this.secBeginTime = null;
    window.clearInterval(this.gameLoopHandle);
}
start(){
    this.playState = true;
    this.currentSecond = 0;
    this.secBeginTime = this.getTime();
    //this.gameLoopHandle = window.setInterval(
      //  this.gameLoop, 16); 
      this.gameLoopHandle = window.setInterval(() => {
            this.gameLoop();
        }, (this.fpsMs).toFixed(0));
    
}
gameLoop(){
//this.gameLoopHandle = window.requestAnimationFrame(this.gameLoop.bind(this));    
    if(this.playState === true){
    this.calcCurrentSecond();  
    }
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
// rewind(){}
// forward(){}
// skipAhead(){}
// skipBack(){}

getTime(){
    const d = new Date();
    return d.getTime();
}


//////////////////////////classsss-----------------
}
