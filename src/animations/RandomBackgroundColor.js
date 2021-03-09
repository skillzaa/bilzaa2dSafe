import SingleVariableBaseAnimation from "./SingleVariableBaseAnimation.js";

export default class RandomBackgroundColor extends SingleVariableBaseAnimation {

constructor(fps=6,valueName="fillStyle",from,to,fromSecond,toSecond){
    super(fps=6,valueName,from,to,fromSecond,toSecond);
 
 this.comments = "This object once attached to an element will make that element shadow of different random colors.";

}
algorithem(bdReqForAni,currentSecond){
    bdReqForAni[this.valueName] = this.randomColor(bdReqForAni); 
return bdReqForAni;;    
}
//................class
}