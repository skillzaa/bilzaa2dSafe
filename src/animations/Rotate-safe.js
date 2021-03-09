
import BaseAnimation from "./BaseAnimation.js";

export default class Rotate extends BaseAnimation {

constructor(rps=6,clockwise=true,fromSec,toSec){
    super("rotate","basic");
 this.rps = rps;
 this.fromSec = fromSec;
 this.toSec = toSec;
this.deltaPerFrame = rps/this.fps;

this.bdReqForAni = [
     {name: "rps"},
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