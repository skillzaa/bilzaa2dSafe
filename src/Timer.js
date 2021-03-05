
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
this.incrementFrame();
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