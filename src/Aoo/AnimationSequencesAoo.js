
import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js";
import AooBase from "./AooBase.js";

export default class animationSequencesAoo extends AooBase{    
constructor(){
super();//the data array is in baseclass
}
add(incomming={}){
const aniSeq = new SingleVariableBaseAnimation(incomming);
this.data.push(aniSeq);    
return true;
} 

//---------------------------------
}