export default class element{

constructor(ctx) {
    this.ctx = ctx;
    this.x = 20;
    this.y = 20;
    this.fromX;
    this.fromY;
    this.toX;
    this.toY;
    this.startTime;
    this.endTime;  
    this.animationDuration =0;  
    this.currentAnimationFrame =0;
    this.deltaX = 0;  
    this.deltaY = 0;  

    this.height = 100;
    this.width = 200;
}


draw(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
}//fn

animate(fromX,fromY,toX,toY,startTime,endTime){
    this.x = fromX;
    this.y = fromY;
    
    this.startTime =startTime;
    this.endTime = endTime;

    this.animationDuration  = endTime - startTime ; 
    this.toX = toX;
    this.toY = toY;

    this.currentAnimationFrame =0; 
     this.deltaX = ( (toX - fromX) / this.animationDuration );         
     this.deltaY = ( (toY - fromY) / this.animationDuration );         
     
}//fn

//////////////////////////classsss-----------------
}