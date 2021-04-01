import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default interface IBaseAnimation {

    attributeToAnimateName:string;
    readOnlyElementAttrNames:string[]|[];
    fromSecond:number;
    toSecond:number;
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;
    animate(attributeToAnimateData:any,currentSecond:number,readOnlyElementAttr:{}):string|number|boolean; 
}