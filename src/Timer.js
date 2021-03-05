
export default class Timer {

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
}//start = recontinue ofter pause


stop(){this.currentSecond = 0;}
pause(){
    if (this.pauseFlag===true){
        this.pauseFlag=false;
    }else {
        this.pauseFlag=true
    }   
}

incrementFrame(){
    this.currentFrame = this.currentFrame+1;
    return this.currentFrame;
}
getCurrentFrame(){
    return this.currentFrame;
}
getCurrentSecond(){
    
    return this.currentSecond;
}
//////////////////////////classsss-----------------
}