import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class Rotate extends SingleVariableBaseAnimation {

constructor(fps=6,valueName="rotate",from,to,fromSecond,toSecond){
    super(fps=6,valueName,from,to,fromSecond,toSecond);
 
 this.comments = "This object once attached to an element will make that element rotate as per the given parameters.";

}
//................class
}