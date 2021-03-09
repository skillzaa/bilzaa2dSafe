import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class Rotate extends SingleVariableBaseAnimation {

constructor(fps=6,valueName,from,to,fromSecond,toSecond){
    super(fps=6,valueName,from,to,fromSecond,toSecond);
 
 this.comments = "This object once attached to an element will make that element rotate as per the given parameters.";

}
algorithem(bdReqForAni,currentSecond){
    bdReqForAni.forEach(element => {
        if(element.name == "rotateAngle"){
            element.value += this.deltaPerFrame ;
        }
    });
return bdReqForAni;;    
}
//................class
}