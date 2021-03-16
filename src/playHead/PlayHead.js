/**it is better to have as less states to manage as possible. the first play state is just like paused at start or just paused. so we have 2 states paused and running. The stopped is just paused. for 2 states we can use one variable to control but for 3 states we need more  */

export default class PlayHead {
constructor(duration=100000) {
this.duration = duration; 
this.oldTime = 0;
this.paused = true;
this.startTime = 0;  
}

runningTime(){  
    if (this.paused === false){
        return (Date.now() - this.startTime) + this.oldTime;
     }else {
        return this.oldTime;
    }
}

play(){
    if(this.paused === true){//cant be repeated w/o stop
        this.startTime = Date.now(); //or pause
        this.paused = false;
       }       
}
pause(){
    if(this.paused === false){ // so playinh now will pause
        this.oldTime += Date.now() - this.startTime;
        this.startTime = 0;
        this.paused = true;
       }   
}
stop(){ 
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;  
}

resume(){
    this.play();
  }



forward(ms=5000){  // in fwd add to lapsedBeforePause  
const result = this.runningTime() + ms;
if(result <= this.duration){
    return this.startTime -= ms; //minus in forward
}

}
rewind(ms=5000){// in rwd subtract from startTime    
const result  = (this.runningTime() - ms);
if(result > 0){
    return this.startTime += ms; //minus in forward
}
 
}
//////////////////////////classsss-----------------
}
