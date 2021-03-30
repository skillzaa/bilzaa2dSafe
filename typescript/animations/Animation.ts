import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";


export default class Animation implements IBaseAnimation{
    
    basicAnimationData:IbasicAnimationData;
    readOnlyElementData:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;
    
constructor(basicAnimationData:IbasicAnimationData,readOnlyElementData:string[]|[]=[],argsForAlgo={}){
 this.basicAnimationData = basicAnimationData;
 this.readOnlyElementData = readOnlyElementData;   
 this.argsForAlgo = argsForAlgo;
 this.fps =  60 ; // this has to be settled
 this.lastExecutionTime=0;
 this.store = {};
}

animate(currentSecond:number):[]{    
return [];
}
//===============================================  
}