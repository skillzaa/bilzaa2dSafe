import Animation from "./Animation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default class Linear extends Animation{

    constructor(basicAnimationData:IbasicAnimationData,readOnlyElementData:string[]|[]=[],argsForAlgo={}){
        super(basicAnimationData,readOnlyElementData,argsForAlgo);
    }

animate(attributeToAnimateData:{},currentSecond:number,readOnlyElementData:{}):object[]{

const timeDiff = (this.toSecond - this.fromSecond);
const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
const deltaPerSecond = totalValueDiff / timeDiff;  
const deltaPerFrame = deltaPerSecond/this.fps;
   
//   //here its just ++ wo time, note the +=  
//attributeToAnimateData.value += deltaPerFrame ; 
 
//now am using current second
 attributeToAnimateData.value = (this.argsForAlgo.from + (deltaPerSecond * currentSecond)) ;
   return attributeToAnimateData;

//--------------------------------
}
//-------------------------------------------------------------    
}