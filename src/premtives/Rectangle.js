import BasePrimtive from "./BasePrimtive.js";

export default class Rectangle extends BasePrimtive {

constructor() {
    super();    
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

drawWithoutBorder(){

    //set ctx to basic data
    this.ctx.fillStyle      = this.basicData.fillStyle      ; 
    this.ctx.strokeStyle    = this.basicData.strokeStyle    ;
    this.ctx.shadowColor    = this.basicData.shadowColor    ;
    this.ctx.shadowBlur     = this.basicData.shadowBlur     ;
    this.ctx.shadowOffsetX  = this.basicData.shadowOffsetX  ;
    this.ctx.shadowOffsetY  = this.basicData.shadowOffsetY  ;
    
    this.ctx.fillRect(this.basicData.x,this.basicData.y,this.basicData.width,this.basicData.height);
//--the draw function
}

drawWithBorder(){
const old = this.basicData.fillStyle;    
this.basicData.fillStyle = this.basicData.borderColor;    
this.drawWithoutBorder();
this.basicData.fillStyle = old;
this.basicData.x += 4;
this.basicData.y += 4;
this.basicData.width -= 8;
this.basicData.height -= 8;
this.basicData.shadowBlur = 0;
this.basicData.shadowOffsetX = 0;
this.basicData.shadowOffsetY = 0;
        
this.drawWithoutBorder();
}   
//////////////////////////classsss-----------------
}