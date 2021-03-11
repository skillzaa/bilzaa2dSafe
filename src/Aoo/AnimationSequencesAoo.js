
import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js";
import AooBase from "./AooBase.js";

export default class animationSequencesAoo extends AooBase{    
constructor(){
super();//the data array is in baseclass
}
add(valueName,fromSecond,toSecond, algo, opt={}){
const aniSeq = new SingleVariableBaseAnimation(valueName,fromSecond,toSecond, algo, opt);
this.data.push(aniSeq);    
return true;
} 

//---------------------------------
}