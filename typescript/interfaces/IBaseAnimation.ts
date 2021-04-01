import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default interface IBaseAnimation {

    attributeToAnimate:string;
    fromSecond:number;
    toSecond:number;
    readOnlyElementAttrNames:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;
    animate(attributeToAnimateData:any,currentSecond:number,readOnlyElementAttr:{}):object[]; 
}