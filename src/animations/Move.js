
import BaseSequence from "./BaseSequence.js";

export default class Move extends BaseSequence {

constructor(fromX,fromY,toX,toY,fromSecond,toSecond){
    super("move","basic");
 this.fromX = fromX;
 this.fromY = fromY;
 this.toX = toX;
 this.toY = toY;
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;
this.deltaXPerMinute = this.calculateDeltaPerMinute(fromX,toX,fromSecond,toSecond);
this.deltaXPerFrame = this.deltaXPerMinute/this.fps;
this.deltaYPerMinute = this.calculateDeltaPerMinute(fromY,toY,fromSecond,toSecond);
this.deltaYPerFrame = this.deltaYPerMinute/this.fps;
 this.bdReqForAni = [
     {name: "x"},
     {name:"y"}
 ];
 
 this.comments = "This object once attached to an element will make that element move as per the given parameters.";

}
calculateDeltaPerMinute(fromValue,toValue,fromSecond,toSecond){
    const timeDiff = (toSecond - fromSecond).toFixed(0);
    const totalValueDiff = (toValue - fromValue).toFixed(0);
    return totalValueDiff/timeDiff;
}
animationManipulation(bdReqForAni,currentSecond){
   
bdReqForAni.forEach(element => {
    if(element.name == "x"){
        element.value += this.deltaXPerFrame ;
    }
    if(element.name == "y"){
        element.value += this.deltaYPerFrame ;
    }
});
return bdReqForAni;
}


//...............................................    
}