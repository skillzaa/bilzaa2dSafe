import Algorithms from "./algo/Algorithms.js";

export default class SingleVariableBaseAnimation {

//constructor(valueName,fromSecond,toSecond, algo, opt={}){
constructor(compulsary,dataFromElement=[],argsForAlgo={}){
//--------------------ALGO FASADE---------------      
    this.algorithms = new Algorithms();
//--------------------COMPULSARY ITEMS---------------    
 this.valueName = compulsary.valueName ;
 this.fromSecond = compulsary.fromSecond  ;
 this.toSecond = compulsary.toSecond ;
 this.algo = this.algorithms.getAlgo(compulsary.algo) ; 
 //-----------------------------------
 this.dataFromElement = dataFromElement;
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ;
 
}
/**????????????????????????? */
getAnimationData(){//????????
//animation data [simple array] is the array of attributes that is sent to the element and that send back these attributes.
    const a = [];
   // a.push(this.valueName);
    this.dataFromElement.forEach(d => {
        a.push(d);
    });
return a;    
}
animate(animationData,currentSecond){
const ret = this.algo(animationData,currentSecond);
//    const ret = this[this.algo](animationData,currentSecond);
    return ret;
// const retArray = this.algorithem(animationData,currentSecond);   
// return retArray;
}
//===============================================

//...............................................    
}