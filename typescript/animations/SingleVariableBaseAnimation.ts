import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";


export default class SingleVariableBaseAnimation implements IBaseAnimation{
    
    basicAnimationData:IbasicAnimationData;
    readOnlyElementData:string[]|[];
    argsForAlgo : {};
    fps:number;
    algorithms:Algorithms;
    
constructor(basicAnimationData:IbasicAnimationData,readOnlyElementData:string[]|[]=[],argsForAlgo={}){
//--------------------ALGO FASADE---------------      
this.algorithms = new Algorithms();
//--------------------basic ITEMS---------------    
this.basicAnimationData = basicAnimationData;
// this is set at creation time---
//  this.attributeToAnimate = basic.attributeToAnimate ;
//  this.fromSecond = basic.fromSecond  ; //must for every animation
//  this.toSecond = basic.toSecond ;//must for every animation
//  this.algo = this.algorithms.getAlgo(basic.algo) ; 
 //-----------------------------------
 this.readOnlyElementData = readOnlyElementData;   
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ; /// this has to be settled
 //--------------------------------------------
 //this.lastExecutionTime;
}
// the attributeToAnimate and readOnlyElementData in the constructor are just the names of the attributes but here we are getting the attrribute array of objects for each from the primtive with latest values.
animate(attributeToAnimate:[],readOnlyElementData:[],currentSecond:numbery,additionalData:{}={}){

//this.argsForAlgo.lastExecutionTime = this.lastExecutionTime    

const ret = this.algo(
    attributeToAnimate,
    readOnlyElementData,
    currentSecond,
    this.argsForAlgo,
    this.basicAnimationData,
    additionalData,
    );
//after running the animation reset the lastExecutionTime;
//this.argsForAlgo.lastExecutionTime = Date.now()
    return ret;
}

//===============================================  
}