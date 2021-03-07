import Metal from "../metal/Metal.js";

export default class BasePrimtive  extends Metal{

constructor() {
    super();
    this.animations = [];
    this.elementData = {};
    this.basicData = {
        x: 100,
        y:100,
        width: 100,
        drawBorder : true,
        borderColor : "red",
        height: 50,
        fillStyle: "green",
        strokeStyle: "#FF0000",
        shadowColor: "blue",
        shadowBlur: 4,
        shadowOffsetX: 4,
        shadowOffsetY: 4
    };
}

addAnimation(animationSequence){
this.animations.push(animationSequence);
}
setNextFrame(){
    this.animations.forEach(animation => {
      //  const args = this.getAnimationArgument(animation.argumentsRequired);
        animation.animationManipulation();
        this.basicData.x += 1;
        this.basicData.y += 1;
    });
}
addMove(fromX,fromY,toX,toY,startTime,endTime){
const seq = {};
seq.fromX = fromX;
seq.toX = toX;
seq.fromY = fromY;
seq.toY = toY;

seq.startTime = startTime;
seq.endTime = endTime;
seq.seqDuration  = endTime - startTime ; 

seq.deltaX = ( (toX - fromX) / seq.seqDuration );         
seq.deltaY = ( (toY - fromY) / seq.seqDuration );         
this.animations.push(seq);    
    
}//fn
getCurrentSequences(currentSecond){
const seq = [];
    for (let x = 0; x < this.animations.length; x++) {
    
    if(this.animations[x].startTime < currentSecond && this.animations[x].endTime > currentSecond ){
        seq.push(this.animations[x]);  
    }
}//for ends
 if (seq.length > 0){return seq;}else{ return false;}
}//getCurrentSequence

draw(){
    // if(this.basicData.drawBorder === true){
    //     this.drawWithBorder();
    // }else {
    //     this.drawWithoutBorder();
    // }
this.drawWithoutBorder();    
}

drawWithoutBorder(){
    
}
drawWithBorder(){

}
editBasicData(itemName, itemValue=""){
    this.basicData[itemName] = itemValue;
}

//////////////////////////classsss-----------------
}