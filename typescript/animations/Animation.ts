import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IaniData from "../interfaces/IaniData.js";


export default abstract class Animation implements IBaseAnimation{
    
   // aniData:IaniData;
   attributeToAnimateName:string;
   fromSecond:number;
   toSecond:number;
   readOnlyElementAttrNames:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;

constructor(aniData:IaniData,argsForAlgo={}){
 //this.aniData = aniData;
 this.attributeToAnimateName = aniData.attributeToAnimateName ;//must 
 this.fromSecond = aniData.fromSecond  ; //must for every animation
 this.toSecond = aniData.toSecond ;//must for every animation
 this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;   
//--------------------------------------------------------------------
 this.argsForAlgo = argsForAlgo;
//--------------------------------------------------------------------

 this.fps =  60 ; // this has to be settled
 this.lastExecutionTime=0;
 this.store = {};
}

public animate(attributeToAnimateData:any,currentSecond:number,readOnlyElementData:{}={}):string|number|boolean{    
return true;
}
//===============================================  
}