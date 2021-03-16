export default class PlayHead {
constructor(duration=100000) {
    this.playState = false;
    this.duration = duration; 

    this.alreadyPlaying = false;
    this.alreadyPused = false;

    this.beginTime = 0;
    this.beginPause = 0;
}

runningTime(){
  return  (Date.now() - this.beginTime) - this.pauseTime();
}

pauseTime(){
return (Date.now - this.beginPause);
}

stop(){ // same state as at start excpt dauration
    if(this.alreadyPlaying === true){
        beginTime = 0;
        this.alreadyPlaying = false;
       }      
}

play(){
    if(this.alreadyPlaying === false){
        this.beginTime = Date.now();
        this.alreadyPlaying = true;
       }       
}

pause(){
    if(this.alreadyPaused === false){
        this.beginPause = Date.now();
        this.alreadyPaused = true;
       }   
}
resume(){
    if(this.alreadyPaused === true){
        this.beginPause = 0;
        this.alreadyPaused = false;
       }   
}

forward(ms=5000){  // in fwd add to lapsedBeforePause  
const result = this.runningTime() + ms;
if(result >= this.duration){
    return this.runningTime();
}else{
this.lapsedBeforePause = this.lapsedBeforePause + ms;
}

}
rewind(ms=5000){// in rwd subtract from beginTime    
const result  = (this.runningTime() - ms);
if( result <= 1000 ){
    return false;
}else{
    this.lapsedBeforePause += this.runningTime();    
    this.beginTime = Date.now();    
this.lapsedBeforePause = this.lapsedBeforePause - ms;
}
}

moveTimeToLapsed(){  

this.lapsedBeforePause += (Date.now() - this.beginTime);
return this.lapsedBeforePause;
}

stopPauseCounting(){

}
stopRunningCount(){

}
//////////////////////////classsss-----------------
}
