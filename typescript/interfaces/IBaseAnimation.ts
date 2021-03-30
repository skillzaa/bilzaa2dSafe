import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default interface IBaseAnimation {

    basicAnimationData:IbasicAnimationData;
    readOnlyElementData:string[]|[];
    argsForAlgo : {};
    lastExecutionTime:number;
    store:{};
    fps:number;
    animate(currentSecond:number):[]; 
}