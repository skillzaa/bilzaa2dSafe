import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default interface IBaseAnimation {

    attributeToAnimate:string;
    fromSecond:number;
    toSecond:number;
    readOnlyElementData:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;
    animate(currentSecond:number):object[]; 
}