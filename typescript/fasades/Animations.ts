
import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js"; 

export default class Animations{    
constructor(){
this.data=[];
}   
add(compulsary,dataFromElement=[],argsForAlgo={},future={}){
const aniSeq = new SingleVariableBaseAnimation(compulsary,dataFromElement,argsForAlgo,future);
this.data.push(aniSeq);    
return true;
} 

//---------------------------------
}