
import BaseAnimation from "./BaseAnimation.js";

export default class Move extends BaseAnimation {

constructor(fromX,fromY,toX,toY,fromSecond,toSecond){
    super("move","basic");
 this.fromX = fromX;
 this.fromY = fromY;
 this.toX = toX;
 this.toY = toY;
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;
this.deltaXPerSecond = this.calculateDeltaPerSecond(fromX,toX,fromSecond,toSecond);
this.deltaXPerFrame = this.deltaXPerSecond/this.fps;
this.deltaYPerMinute = this.calculateDeltaPerSecond(fromY,toY,fromSecond,toSecond);
this.deltaYPerFrame = this.deltaYPerMinute/this.fps;
 this.bdReqForAni = [
     {name: "x"},
     {name:"y"}
 ];
 
 this.comments = "This object once attached to an element will make that element move as per the given parameters.";

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