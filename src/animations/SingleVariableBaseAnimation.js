
import BaseAnimation from "./BaseAnimation.js";

export default class SingleVariableBaseAnimation extends BaseAnimation {

constructor(rps=6,valueName,from,to,fromSecond,toSecond){
    super("rotate","basic");
 this.rps = rps;
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;

 this.deltaPerSecond = 
this.deltaPerFrame = rps/this.fps;

this.bdReqForAni = [
     {name: "rotateAngle"}
 ];
 
 this.comments = "This object once attached to an element will make that element rotate as per the given parameters.";

}

animationManipulation(bdReqForAni,currentSecond){
   
bdReqForAni.forEach(element => {
    if(element.name == "rotateAngle"){
        element.value += this.deltaPerFrame ;
    }
});
return bdReqForAni;
}


//...............................................    
}