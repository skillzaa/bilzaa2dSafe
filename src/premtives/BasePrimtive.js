export default class BasePrimtive{

constructor(ctx) {
    this.sequences = [];
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
    this.rotateValue =0;
    this.deltaX = 0;  
    this.deltaY = 0;  

    this.height = 20;
    this.width = 40;
}


draw(currentSecond){
//this.ctx.save();    
const seq = this.getCurrentSequence(currentSecond);

if(seq === undefined || seq === null){return;}
console.log("seq",seq);
  

 this.x = this.x + seq.deltaXPerFrame;
this.y = this.y + seq.deltaYPerFrame;
 

this.ctx.fillStyle = "#ff0000";

///////////////////////////////////////////////////
this.ctx.translate( this.x+this.width/2, this.y+this.height/2 );
//this.ctx.translate( 20, 200 );
const rotationalConstant = 10 * Math.PI / 180;

//this.rotateValue = this.rotateValue * rotationalConstant; 
this.rotateValue = this.rotateValue + 0.9; 
this.ctx.rotate( this.rotateValue );
this.ctx.translate( -this.x-this.width/2, -this.y-this.height/2 );
//this.ctx.translate( -20, -200 );

this.ctx.fillRect(this.x, this.y, this.width, this.height);  //draw normal shape

//this.ctx.rotate(-rotateValue );
///////////////////////////////////////////////////
this.ctx.setTransform(1, 0, 0, 1, 0, 0);
//this.ctx.restore();

}//fn

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

    //this.currentAnimationFrame =0; 
this.sequences.push(moveSeq);    
   //  console.log(this.sequences);
}//fn

getCurrentSequence(currentSecond){

    for (let x = 0; x < this.sequences.length; x++) {
    
    if(this.sequences[x].startTime < currentSecond && this.sequences[x].endTime > currentSecond ){
        return this.sequences[x];  
    }
}//for ends
return null; //final value if no found
}//getCurrentSequence

singleVariableAnimation(){

}
doubleVariableAnimation(varOneStart,varOneEnd,varTwoStart,varTwoEnd,startTime,endTime){

}
multipleVariableAnimation(){}
//////////////////////////classsss-----------------
}