import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";


export default abstract class Animation implements IBaseAnimation{
    
   // basicAnimationData:IbasicAnimationData;
   attributeToAnimate:string;
   fromSecond:number;
   toSecond:number;
   readOnlyElementAttrNames:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;

constructor(basicAnimationData:IbasicAnimationData,readOnlyElementAttrNames:string[]|[]=[],argsForAlgo={}){
 //this.basicAnimationData = basicAnimationData;
 this.attributeToAnimate = basicAnimationData.attributeToAnimate ;//must 
 this.fromSecond = basicAnimationData.fromSecond  ; //must for every animation
 this.toSecond = basicAnimationData.toSecond ;//must for every animation
//--------------------------------------------------------------------
 this.readOnlyElementAttrNames = readOnlyElementAttrNames;   
 this.argsForAlgo = argsForAlgo;
 this.fps =  60 ; // this has to be settled
 this.lastExecutionTime=0;
 this.store = {};
}

public animate(attributeToAnimateData:any,currentSecond:number,readOnlyElementData:{}={}):object[]{    
return [];
}
//===============================================  
}