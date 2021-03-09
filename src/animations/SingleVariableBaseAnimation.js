import BaseAnimation from "./BaseAnimation.js";
export default class SingleVariableBaseAnimation extends BaseAnimation {
constructor(fps=60,valueName,from,to,fromSecond,toSecond){
    super("rotate","basic");
 this.fps = fps;
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;
 
 this.deltaPerSecond = this.calculateDeltaPerSecond(from,to,fromSecond,toSecond);
this.deltaPerFrame = this.deltaPerSecond/this.fps;
this.bdReqForAni = [{name: `${valueName}`}];
 this.comments = "This object is template for one variable animation system.";
}
animationManipulation(bdReqForAni,currentSecond){
    bdReqForAni = this.algorithem(bdReqForAni,currentSecond);   
return bdReqForAni;
}
algorithem(bdReqForAni,currentSecond){}
//...............................................    
}