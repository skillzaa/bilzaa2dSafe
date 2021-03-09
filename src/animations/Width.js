import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class Width extends SingleVariableBaseAnimation {

constructor(fps=60,valueName="width",from=10,to=100,fromSecond=1,toSecond=20){
    super(fps,valueName,from,to,fromSecond,toSecond);
 
 this.comments = "This object once attached to an element will make that element rotate as per the given parameters.";

}
//................class
}